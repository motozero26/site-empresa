const MAX_TOTAL_SIZE = 40 * 1024 * 1024; // 20MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif'];

export const validateImageFile = async (file: File): Promise<File | null> => {
  // Check file type
  if (!ALLOWED_TYPES.includes(file.type)) {
    toast.error(`${file.name} não é um formato de imagem válido`);
    return null;
  }

  // Check file size
  if (file.size > MAX_TOTAL_SIZE) {
    toast.error(`${file.name} excede o tamanho máximo permitido de 40MB`);
    return null;
  }

  return file;
};

export const calculateTotalSize = (files: File[]): number => {
  return files.reduce((total, file) => total + file.size, 0);
};

export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};