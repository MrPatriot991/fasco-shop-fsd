import { useMemo } from "react";
import { CONTENT_MAP, getInfoSectionRenderer } from "@/entities/info";
import { useInfoType } from "@/features/info-navigation";
import { InfoLayout } from "@/widgets/info-layout";

export const InfoPage = () => {
  const { type, setInfoType } = useInfoType();
  const content = CONTENT_MAP[type] ?? CONTENT_MAP.faq;

  const section = useMemo(() => {
    const renderSection = getInfoSectionRenderer(type);
    return renderSection(content);
  }, [content, type]);

  return (
    <InfoLayout
      title={content.title}
      description={content.description}
      onContactSupport={() => setInfoType("support")}
      supportCtaLabel="Contact support"
    >
      {section}
    </InfoLayout>
  );
};
