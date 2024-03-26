import React, { useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function MyApp({ pdfPath }) {
  // Accept pdfPath as a prop
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [pdfFile, setPdfFile] = useState(null); // Store PDF file path
  const containerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current;
      if (container) {
        const { scrollTop, scrollHeight, clientHeight } = container;
        const newPage = Math.ceil(
          (numPages * scrollTop) / (scrollHeight - clientHeight)
        );
        setPageNumber(Math.min(Math.max(newPage, 1), numPages));
        setScrollPosition(scrollTop);
      }
    }

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [numPages]);

  useEffect(() => {
    if (!pdfPath) return; // If pdfPath is not provided, do nothing

    // Dynamically import PDF file
    const importPDF = async () => {
      try {
        const pdfModule = await import(pdfPath);
        setPdfFile(pdfModule.default);
      } catch (error) {
        console.error("Error importing PDF:", error);
      }
    };

    importPDF(); // Call the importPDF function when the component mounts
  }, [pdfPath]); // Run this effect whenever pdfPath changes

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const zoomIn = () => {
    setZoom(zoom * 1.2); // Increase zoom by 20%
  };

  const zoomOut = () => {
    setZoom(zoom / 1.2); // Decrease zoom by 20%
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        id="pdfbox"
        className="h-[40rem] flex-col justify-center -mt-[21.2rem] items-center w-[50rem] hidden bg-gray-300 rounded-xl"
      >
        <p
          className="text-right mx-5 font-semibold text-xl text-red-500 hover:cursor-pointer"
          onClick={() => {
            document.getElementById("pdfbox").classList.toggle("hidden");
          }}
        >
          X
        </p>
        <div
          ref={containerRef}
          className="flex justify-center h-[35rem] w-full mt-3 overflow-scroll overflow-x-hidden"
          style={{ zoom }}
        >
          {pdfFile && ( // Render Document component only when pdfFile is not null
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => {
                  return (
                    <Page
                      key={page}
                      pageNumber={page}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  );
                })}
            </Document>
          )}
        </div>
        <div className="flex justify-center">
          <button
            onClick={zoomIn}
            className="text-2xl -mt-2 hover:cursor-pointer"
          >
            +
          </button>
          <p>
            &nbsp; Page {pageNumber} of {numPages} &nbsp;
          </p>
          <button
            onClick={zoomOut}
            className="text-3xl -mt-2 hover:cursor-pointer"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyApp;
