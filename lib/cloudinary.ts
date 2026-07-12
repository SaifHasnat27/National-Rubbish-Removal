// Cloudinary unsigned browser upload.
// Config lives here so nothing is hardcoded across components.
// Docs: https://cloudinary.com/documentation/client_side_uploading

const CLOUD_NAME = "oakve7mf";
const UPLOAD_PRESET = "nrr_website";
// "auto" lets Cloudinary detect image vs video (vs raw) from the file itself,
// so one endpoint handles both photos and videos.
const ENDPOINT = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`;

export interface CloudinaryResult {
  secureUrl: string; // the HTTPS link we forward to the webhook
  publicId: string;
  bytes: number;
  format: string;
  resourceType: string; // "image" | "video"
}

/**
 * Uploads a single File to Cloudinary (unsigned) and returns its secure_url.
 * The URL comes back in THIS response — no later fetch/polling needed.
 * Throws on any non-2xx or network failure so the caller can surface an error.
 */
export async function uploadToCloudinary(file: File): Promise<CloudinaryResult> {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(ENDPOINT, { method: "POST", body: fd });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || "Upload failed. Please try again.");
  }

  return {
    secureUrl: data.secure_url,
    publicId: data.public_id,
    bytes: data.bytes,
    format: data.format,
    resourceType: data.resource_type,
  };
}
