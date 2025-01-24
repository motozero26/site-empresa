import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { sendEmail } from '../services/emailService';
import { isValidEmail, isValidPhone, formatPhoneNumber, isRequiredField } from '../utils/validationUtils';
import FormTip from './FormTip';
import ImageUploadZone from './ImageUpload/ImageUploadZone';
import ImagePreview from './ImageUpload/ImagePreview';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  images: File[];
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  images?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    images: []
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!isRequiredField(formData.name)) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!isRequiredField(formData.email)) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!isRequiredField(formData.phone)) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!isValidPhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido';
    }

    if (!isRequiredField(formData.message)) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleImageSelect = (newFiles: File[]) => {
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newFiles]
    }));
    
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: undefined }));
    }
  };

  const handleImageRemove = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { ticketNumber } = await sendEmail(formData);
      toast.success(`Mensagem enviada com sucesso! Seu número de chamado é: ${ticketNumber}`);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        images: []
      });
    } catch (error) {
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === 'phone') {
      newValue = formatPhoneNumber(value);
    }

    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const renderField = (
    name: keyof Omit<FormData, 'images'>,
    label: string,
    type: string = 'text',
    placeholder: string = '',
    tip?: React.ReactNode
  ) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        {name === 'message' ? (
          <textarea
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            rows={4}
            className={`block w-full rounded-md shadow-sm ${
              errors[name] ? 'border-red-300' : 'border-gray-300'
            } focus:border-blue-500 focus:ring-blue-500`}
          />
        ) : (
          <input
            type={type}
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            placeholder={placeholder}
            className={`block w-full rounded-md shadow-sm ${
              errors[name] ? 'border-red-300' : 'border-gray-300'
            } focus:border-blue-500 focus:ring-blue-500`}
          />
        )}
        {errors[name] && (
          <p className="mt-1 text-sm text-red-600">{errors[name]}</p>
        )}
        {tip && <FormTip>{tip}</FormTip>}
      </div>
    </div>
  );

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Entre em Contato</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderField('name', 'Nome')}
            {renderField('email', 'E-mail', 'email')}
            {renderField('phone', 'Telefone', 'tel', '(XX) XXXXX-XXXX')}
            {renderField('message', 'Descrição do Problema', 'text', '', 
              <>
                Faça uma breve descrição do problema. Explique o que aconteceu ou os sintomas apresentados pelo computador, como:
                <ul className="list-disc ml-4 mt-1">
                  <li>O dispositivo não liga;</li>
                  <li>Mensagens de erro;</li>
                  <li>Lentidão;</li>
                  <li>Entre outros.</li>
                </ul>
              </>
            )}
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Anexar Imagens
              </label>
              <ImageUploadZone
                onFilesSelected={handleImageSelect}
                error={errors.images}
              />
              {formData.images.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-4">
                  {formData.images.map((file, index) => (
                    <ImagePreview
                      key={`${file.name}-${index}`}
                      file={file}
                      onRemove={() => handleImageRemove(index)}
                    />
                  ))}
                </div>
              )}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  );
}