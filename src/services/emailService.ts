import emailjs from '@emailjs/browser';
import { generateTicketNumber } from '../utils/ticketUtils';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  images: File[];
}

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
};

export const sendEmail = async (formData: ContactForm) => {
  const ticketNumber = generateTicketNumber();
  
  // Convert images to base64
  const imagePromises = formData.images.map(convertFileToBase64);
  const imageBase64Array = await Promise.all(imagePromises);
  
  try {
    const response = await emailjs.send(
      'service_ymytrei', //service_ID
      'template_pbh8ycc', //template_ID
      {
        ticket_number: ticketNumber,
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
        images: imageBase64Array,
      },
      'HkkbOE8Z4QRNULeaW' //Public_key
    );
    return { response, ticketNumber };
  } catch (error) {
    throw error;
  }
};