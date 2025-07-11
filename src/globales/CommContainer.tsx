import "./comm-container.css";
import { useState } from "react";

type Option = {
  titulo: string;
  descripcion?: string;
  precio: number;
  precioEU?: number;
  galeriaEnlace?: string;
};

type CommContainerProps = {
  title: string;
  description?: string;
  optionList: Option[];
  galeria?: string[];
};

const CommContainer = ({
  title,
  description,
  optionList,
  galeria,
}: CommContainerProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const toggleDescription = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };
  return (
    <div className="comm-container">
      <div style={{ textAlign: "center", paddingTop: 20, paddingBottom: 20 }}>
        <h2>
          {" "}
          <strong>"{title}"</strong>
        </h2>
        {description && <p className="optiontext"> **{description}</p>}
      </div>

      <div className="comm-body">
        <div className="option-list">
          {optionList.map((option, idx) => (
            <div className="option-container" key={idx}>
              <div className="main-option-info">
                <p>
                  - {option.titulo} - ${option.precio}
                  {option.precioEU !== undefined && <> / €{option.precioEU}</>}
                </p>
                {option.descripcion && (
                  <button
                    className="info-button"
                    onClick={() => toggleDescription(idx)}
                  >
                    ?{" "}
                  </button>
                )}
              </div>
              {option.descripcion && openIndexes.includes(idx) && (
                <p className="optiontext">{option.descripcion}</p>
              )}
            </div>
          ))}
        </div>
        {galeria && galeria.length > 0 && (
          <div className="galeria">
            {/* Imagen grande */}
            {galeria[0] && (
              <img
                onClick={() => setSelectedImg(galeria[0])}
                src={galeria[0]}
                alt="Ejemplo 1"
                className="galeria-img galeria-img-grande"
              />
            )}
            {/* Las siguientes 3 imágenes pequeñas */}
            <div className="galeria-fila-chica">
              {galeria.slice(1, 4).map((img, idx) => (
                <img
                  onClick={() => setSelectedImg(img)}
                  src={img}
                  alt={`Ejemplo ${idx + 2}`}
                  key={idx + 1}
                  className="galeria-img galeria-img-chica"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedImg && (
        <div className="modal-backdrop" onClick={() => setSelectedImg(null)}>
          <div
            className="modal-img-container"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedImg} alt="Imagen grande" className="modal-img" />
            <button
              className="close-modal"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommContainer;
