import { FaWhatsapp } from 'react-icons/fa';

const StickySocial = () => {
  const phoneNumber = "9837033821";

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg">
          <FaWhatsapp className="text-white text-4xl" />
        </div>
      </a>
    </div>
  );
};

export default StickySocial;
