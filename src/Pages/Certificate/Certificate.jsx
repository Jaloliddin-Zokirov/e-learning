import React, { useState } from "react";
import CertificateCard from "../../Components/CertificateCard/CertificateCard";
import { Modal } from "antd";
import ShareModal from "../../Components/ShareModal/ShareModal"; // Modalni asosiy komponentga olib chiqamiz
import "./Certificate.scss";

const Certificate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [isShareOpen, setIsShareOpen] = useState(false);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const openShareModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsShareOpen(true);
  };

  return (
    <section>
      <h2 className="font-medium text-[#2964c2] mt-4 mb-4 text-4xl">
        Sertifikatlar
      </h2>
      <ul className="flex items-start xl:justify-between justify-center flex-wrap gap-4">
        <CertificateCard
          openModal={openModal}
          openShareModal={openShareModal}
        />
      </ul>

      {/* Sertifikatni kattalashtirish modali */}
      <Modal
        className="my-modal"
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Certificate"
            className="w-full rounded"
          />
        )}
      </Modal>

      {/* Ulashish modali (bitta modal) */}
      {isShareOpen && (
        <ShareModal
          imageUrl={selectedImage}
          onClose={() => setIsShareOpen(false)}
        />
      )}
    </section>
  );
};

export default Certificate;
