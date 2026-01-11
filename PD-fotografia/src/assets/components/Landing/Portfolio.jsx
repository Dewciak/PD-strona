import React, {useState, useEffect} from "react";
import GalleryDialog from "./Dialog";
import Gallery from "./Gallery";

function Portfolio() {
  const [showDialog, setShowDialog] = useState(false);
  const [sessionType, setSessionType] = useState({name: "Psy", id: 3});
  const [imageIndex, setImageIndex] = useState(0);
  const [imagesByCategory, setImagesByCategory] = useState({
    Psy: [],
    Konie: [],
    Wydarzenia: [],
  });

  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        const categories = [
          {name: "Psy", id: 3},
          {name: "Konie", id: 4},
          {name: "Wydarzenia", id: 5},
        ];

        const images = await Promise.all(
          categories.map(async (category) => {
            const response = await fetch(`/wp-json/wp/v2/posts?categories=${category.id}`);
            const posts = await response.json();

            if (!Array.isArray(posts)) {
              console.error("Error: API response is not an array", posts);
              return {[category.name]: []};
            }

            const imageUrls = await Promise.all(
              posts.map(async (post) => {
                if (post.featured_media) {
                  const mediaResponse = await fetch(`/wp-json/wp/v2/media/${post.featured_media}`);
                  const mediaData = await mediaResponse.json();
                  return mediaData.source_url;
                }
                return null;
              })
            );

            return {[category.name]: imageUrls.filter((url) => url)};
          })
        );

        const mergedImages = images.reduce((acc, curr) => {
          return {...acc, ...curr};
        }, {});

        setImagesByCategory(mergedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchAllImages();
  }, []);

  return (
    <section id='Portfolio' className='max-w-[1050px] h-auto py-0 mx-auto md:mt-0 md:mb-32 md:pt-0 pt-16'>
      <h2 className='text-center text-6xl pb-12 md:pb-4 md:my-14 tracking-[5px] font-light text-titleGray'>
        Portfolio
      </h2>
      <Gallery
        images={imagesByCategory[sessionType.name] || []}
        sessionType={sessionType}
        setSessionType={setSessionType}
        setShowDialog={setShowDialog}
        setImageIndex={setImageIndex}
      />
      {showDialog === true ? (
        <GalleryDialog
          images={imagesByCategory[sessionType.name] || []}
          setShowDialog={setShowDialog}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default Portfolio;
