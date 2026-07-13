"use client";

import React, { useRef, useState } from "react";
import { ImagePlus, Loader2, X, Plus, CirclePlay } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";
import CameraOption from "./CameraOption";

// ── Guardrails (cheap client-side sanity; abuse-hardening parked) ──
const MAX_FILES = 6;
const MAX_IMAGE_MB = 10;
const MAX_VIDEO_MB = 100;
const MB = 1024 * 1024;

// One uploaded file (photo or video), held in form state.
export interface UploadedPhoto {
  url: string; // Cloudinary secure_url — this is what goes to the webhook
  name: string; // original filename, for the thumbnail label
  type: "image" | "video"; // resource_type from Cloudinary
}

interface PhotoUploadProps {
  value: UploadedPhoto[];
  onChange: (photos: UploadedPhoto[]) => void;
  disabled?: boolean;
}

export default function PhotoUpload({ value, onChange, disabled }: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null); // library / files
  const cameraRef = useRef<HTMLInputElement>(null); // camera capture
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const atLimit = value.length >= MAX_FILES;

  const handleFiles = async (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setError(null);

    const remaining = MAX_FILES - value.length;
    const picked = Array.from(fileList).slice(0, remaining);

    // Validate before uploading anything.
    for (const file of picked) {
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");
      if (!isImage && !isVideo) {
        setError("Only image or video files are allowed.");
        return;
      }
      const capMb = isVideo ? MAX_VIDEO_MB : MAX_IMAGE_MB;
      if (file.size > capMb * MB) {
        setError(`${isVideo ? "Videos" : "Images"} must be under ${capMb}MB.`);
        return;
      }
    }

    setUploading(true);
    try {
      // Upload on PICK so the URL is already in hand before Submit.
      const results = await Promise.all(picked.map((f) => uploadToCloudinary(f)));
      const newPhotos = results.map((r, i) => ({
        url: r.secureUrl,
        name: picked[i].name,
        type: r.resourceType === "video" ? ("video" as const) : ("image" as const),
      }));
      onChange([...value, ...newPhotos]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = ""; // allow re-picking same file
    }
  };

  const removePhoto = (url: string) => {
    onChange(value.filter((p) => p.url !== url));
  };

  // Below xl (1280px) → show the Camera/Gallery sheet (mobile needs the choice).
  // At xl+ (desktop, no camera) → skip the sheet, open the file picker directly.
  const openPicker = () => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 1279px)").matches;
    if (isMobile) {
      setSheetOpen(true);
    } else {
      inputRef.current?.click();
    }
  };

  return (
    <div>
      {/* Library / files picker */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        className="hidden"
        disabled={disabled || uploading || atLimit}
        onChange={(e) => handleFiles(e.target.files)}
      />
      {/* Camera capture (rear camera on mobile; ignored → file pick on desktop) */}
      <input
        ref={cameraRef}
        type="file"
        accept="image/*,video/*"
        capture="environment"
        className="hidden"
        disabled={disabled || uploading || atLimit}
        onChange={(e) => handleFiles(e.target.files)}
      />

      {/* Full-width trigger — only shown when nothing has been uploaded yet.
          Once a file exists, the "+" tile in the thumbnail row adds more. */}
      {value.length === 0 && (
        <button
          type="button"
          onClick={openPicker}
          disabled={disabled || uploading}
          className={`
            w-full px-4 py-3
            text-[var(--text-primary)]
            bg-base-secondary
            border border-[var(--border)]
            rounded-none text-sm leading-[var(--leading-normal)]
            transition-all duration-[var(--transition-fast)]
            focus:outline-none focus:border-[var(--border-dark)]
            focus:ring-1 focus:ring-[var(--color-black)]
            hover:border-[var(--color-stone-400)]
            flex justify-between items-center gap-2 cursor-pointer
            ${disabled || uploading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          <span className="flex-1 min-w-0 truncate text-left text-[var(--text-muted)]">
            {uploading ? "Uploading..." : "Add photos or a quick video"}
          </span>
          {uploading ? (
            <Loader2 className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0 animate-spin" aria-hidden="true" />
          ) : (
            <ImagePlus className="w-4 h-4 text-[var(--text-muted)] flex-shrink-0" aria-hidden="true" />
          )}
        </button>
      )}

      {error && (
        <p role="alert" className="mt-2 text-xs text-red-600 tracking-wide">
          {error}
        </p>
      )}

      {/* Thumbnails — small fixed squares in a row, + tile to add more */}
      {value.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-4">
          {value.map((photo) => (
            <div
              key={photo.url}
              style={{ width: 96, height: 96 }}
              className="photo-tile relative flex-shrink-0"
            >
              {/* Inner layer clips the media to a rounded square; outer stays
                  overflow-visible so the remove button can straddle the corner. */}
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-base">
                {photo.type === "video" ? (
                  <video
                    src={photo.url}
                    muted
                    playsInline
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo.url}
                    alt={photo.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                )}

                {/* Video badge — play-in-circle icon on a dark disc, bottom-left,
                    always visible (mobile + desktop) so it reads on any footage. */}
                {photo.type === "video" && (
                  <span
                    aria-label="Video"
                    style={{
                      position: "absolute",
                      bottom: 6,
                      left: 6,
                      zIndex: 5,
                      backgroundColor: "rgba(0,0,0,0.6)",
                      borderRadius: "9999px",
                    }}
                    className="flex items-center justify-center p-0.5"
                  >
                    <CirclePlay className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                )}
              </div>
              {!disabled && (
                <button
                  type="button"
                  onClick={() => removePhoto(photo.url)}
                  aria-label={`Remove ${photo.name}`}
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    zIndex: 10,
                    width: 22,
                    height: 22,
                    backgroundColor: "rgba(0,0,0,0.85)",
                    backdropFilter: "blur(2px)",
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.3)",
                  }}
                  className="remove-btn flex cursor-pointer items-center justify-center rounded-full text-white transition-all duration-[var(--transition-fast)] hover:!bg-black hover:scale-110"
                >
                  <X className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden="true" />
                </button>
              )}
            </div>
          ))}

          {/* Add-more tile — clean dashed square with a centered plus */}
          {!atLimit && !disabled && (
            <button
              type="button"
              onClick={openPicker}
              disabled={uploading}
              aria-label="Add more photos or videos"
              style={{ width: 96, height: 96 }}
              className={`
                flex flex-shrink-0 items-center justify-center
                rounded-lg
                border border-dashed border-white/20
                text-white/40
                transition-colors duration-[var(--transition-fast)]
                hover:border-white/40 hover:text-white/70
                focus:outline-none
                ${uploading ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
              `}
            >
              {uploading ? (
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              ) : (
                <Plus className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      )}

      {/* Choice sheet — Take Photo vs Upload. Camera row only on touch devices. */}
      <CameraOption
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        onTakePhoto={() => cameraRef.current?.click()}
        onUpload={() => inputRef.current?.click()}
        showCamera={
          typeof window !== "undefined" &&
          window.matchMedia("(max-width: 1279px)").matches // below xl (1280px)
        }
      />

      {/* Desktop-only hover behaviour for the remove button.
          Real media query + :hover — avoids Tailwind's finicky md:group-hover
          compound variant, which wasn't reliably compiling here.
          < 1024px (mobile/tablet): always visible. >= 1024px: hover to reveal. */}
      <style>{`
        @media (min-width: 1024px) {
          .photo-tile .remove-btn { opacity: 0; }
          .photo-tile:hover .remove-btn,
          .photo-tile .remove-btn:focus-visible { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
