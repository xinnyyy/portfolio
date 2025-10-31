"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  cover?: string; // 👈 one main image (unique per project)
  images?: string[]; // 👈 optional gallery
  title: string;
  content?: string;
  description?: string;
  avatars?: { src: string }[];
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority = false,
  cover,
  images = [],
  title,
  content = "",
  description = "",
  avatars = [],
  link = "",
}) => {
  // Determine the main image (priority: cover > first gallery image > null)
  const mainImage = cover || images[0] || null;
  const hasMultiple = images.length > 1;

  return (
    <Column fillWidth gap="m">
      {/* 🖼️ Display cover (single) or carousel (multi) */}
      {hasMultiple ? (
        <Carousel
          sizes="(max-width: 960px) 100vw, 960px"
          items={images.map((image) => ({
            slide: image,
            alt: title,
          }))}
        />
      ) : mainImage ? (
        <div className="relative group overflow-hidden rounded-xl shadow-md">
          <img
            src={mainImage}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            style={{
              height: "472px",     // consistent height across all cards
              width: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
        </div>
      ) : (
        <div className="bg-gray-100 w-full h-64 rounded-xl flex items-center justify-center text-gray-500">
          No image available
        </div>
      )}

      {/* 📄 Info Section */}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}

        {(avatars.length > 0 || description.trim() || content.trim()) && (
          <Column flex={7} gap="16">
            {avatars.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}

            <Flex gap="24" wrap>
              {content.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
