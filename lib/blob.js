import { list, put, del } from '@vercel/blob';

// Upload a file to Vercel Blob
export async function uploadFile(file, options = { access: 'public' }) {
  try {
    const blob = await put(file.name, file, options);
    return blob;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}

// List all files in the blob store
export async function listFiles(prefix = '') {
  try {
    const files = await list({ prefix });
    return files;
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
}

// Delete a file from the blob store
export async function deleteFile(url) {
  try {
    await del(url);
    return { success: true };
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
} 