import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway, ViewType } from "react-images";
import { Box } from "@chakra-ui/react";

interface PhotoProps {
    src: string;
    width: number;
    height: number;
    srcSet?: string | string[];
    sizes?: string | string[];
    alt?: string;
    key?: string;
}

export const ReactPhotoGalleryLightbox = (photos: PhotoProps[]) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <Box>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map((x) => {
                                // console.log(x);
                                // const was = {
                                //     ...x,
                                //     srcset: x.srcSet,
                                //     caption: x.alt,
                                // };
                                const viewType: ViewType = {
                                    source: x.src,
                                    alt: x.alt,
                                };
                                return viewType;
                            })}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </Box>
    );
};
