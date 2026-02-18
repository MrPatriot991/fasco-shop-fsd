import { CONTENT_MAP } from "@/entities/info";
import { useInfoType } from "@/features/info-navigation";
import { InfoLayout } from "@/widgets/info-layout";
import { renderInfoSection } from "../model";

export const InfoPage = () => {
  const { type, setInfoType } = useInfoType();
  const content = CONTENT_MAP[type] ?? CONTENT_MAP.faq;

  return (
    <InfoLayout
      title={content.title}
      description={content.description}
      onContactSupport={() => setInfoType("support")}
      supportCardLabel="Contact support"
    >
      {renderInfoSection(content)}
    </InfoLayout>
  );
};
