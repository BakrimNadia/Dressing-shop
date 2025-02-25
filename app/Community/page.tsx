'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiHeart } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import { BiMessageSquareDots } from "react-icons/bi";
import { MdStars } from "react-icons/md";
import { GiRibbon } from "react-icons/gi";
import Header from '../Component/Header';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

export default function Community() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'Emma L.', message: 'Bonjour à toutes ! Ravie de rejoindre cette communauté 💖', avatar: '/images/avatar1.png' },
    { id: 2, name: 'Sophie M.', message: 'Des conseils pour bien choisir sa taille en seconde main ?', avatar: '/images/avatar2.png' },
    { id: 3, name: 'Laura B.', message: 'J ai trouvé une pépite ici, merci pour ce super site ! ✨', avatar: '/images/avatar3.png' }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      name: 'Vous',
      message: newMessage,
      avatar: '/images/default-avatar.png'
    };

    setMessages([...messages, newMsg]);
    setNewMessage('');
  };

  return (
    <div className="bg-rose-100 min-h-screen py-10 px-6 md:px-16 lg:px-32">
        <Header />
      {/* Titre */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mt-10 mb-6 pt-10 bg-gradient-to-tr from-rose-400 to-gray-400 bg-clip-text text-transparent hover:animate-bounce">Bienvenue dans notre communauté Dressing</h1>
      
      {/* Présentation */}
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 mb-10">
        <Image src="/images/community.jpg" alt="Communauté Mode" width={400} height={300} className="rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-80" />
        <p className="text-gray-700 text-lg text-justify">
          Rejoignez notre communauté passionnée de mode durable et découvrez des astuces, conseils et partages autour du dressing de seconde main ! <br /> 
          En tant que membre, recevez des offres exclusives, des invitations à des événements et des conseils personnalisés pour vous aider à adopter une mode plus responsable. 🌿
        </p>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-rose-400 text-4xl hover:animate-bounce">
          <FiHeart />
          <HiUsers />
          <BiMessageSquareDots />
          <MdStars />
          <GiRibbon />
        
      </div>
      <div className="flex justify-center gap-6 mt-6 text-xl">
        <a
          href="#"
          className="inline-block justify-center rounded-md border border-transparent bg-rose-400 px-8 py-3 mb-10 text-center font-medium text-white hover:bg-white hover:text-rose-400 transition-colors duration-300"
          >
          Adhérer à la communauté
        </a>
      </div>

      {/* Forum */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Forum de discussion</h2>
        <div className="space-y-6">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-4 p-4 border-b last:border-none">
              <Image src={msg.avatar} alt={msg.name} width={50} height={50} className="rounded-full" />
              <div>
                <h3 className="font-semibold text-gray-900">{msg.name}</h3>
                <p className="text-gray-700">{msg.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Zone de saisie pour écrire un message */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Écrire un message</h2>
        <textarea 
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          rows={3}
          placeholder="Partagez votre message ici..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button 
          onClick={handleSendMessage} 
          className="mt-4 px-4 py-2 bg-rose-400 text-white font-semibold rounded-md hover:bg-white hover:text-rose-400 transition-colors duration-300">
          Envoyer
        </button>
      </div>
      <a href="#header" className="flex left-[calc(50%-16px)] items-center justify-center text-white animate-bounce mt-4 pt-4 mb-2">
        <ChevronUpIcon className="w-8 h-8 text-rose-400 animate-bounce" />
        </a>
    </div>
  );
}
