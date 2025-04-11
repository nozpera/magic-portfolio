import { Flex, CompareImage } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = gallery.title;
  const description = gallery.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/gallery`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Gallery() {
  return (
    <Flex fillWidth direction="column" gap="8">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,
            url: `https://${baseURL}/gallery`,
            image: gallery.images.flatMap((image) => [
              {
                "@type": "ImageObject",
                url: `${baseURL}${image.before}`,
                description: image.altBefore,
              },
              {
                "@type": "ImageObject",
                url: `${baseURL}${image.after}`,
                description: image.altAfter,
              },
            ]),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      
      <Flex fillWidth direction="column" align="center" gap="8" padding="8">
        <Flex
          fillWidth
          gap="8"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {gallery.images.map((image, idx) => (
            <Flex
              key={idx}
              style={{
                flex: "1 1 clamp(250px, 45%, 400px)",
                width: "100%",
                maxWidth: image.maxWidth,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              className="hover-effect"
            >
              <CompareImage
                radius="xl"
                border="neutral-alpha-weak"
                overflow="hidden"
                aspectRatio={image.aspectRatio}
                leftContent={{
                  alt: image.altBefore,
                  src: image.before,
                }}
                rightContent={{
                  alt: image.altAfter,
                  src: image.after,
                }}
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
