import {
  Card,
  MarketingLayout,
  Button,
  Image,
  Box,
  Tooltip,
} from "@wix/design-system";
import "@wix/design-system/styles.global.css";
import { useEffect, useState } from "react";
import "@wix/design-system/styles.global.css";

const Recommends = (appId: string = "b06f2ef6-a9af-43b9-ab7c-2749448a41e8") => {
  const [apps, setApps] = useState([] as any);

  useEffect(() => {
    fetch(
      `https://certifiedcode.wixsite.com/custom-dashboard/_functions/recommends/${appId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setApps(data);
      });
  }, []);

  return (
    <Card>
      <MarketingLayout
        title="Discover 50+ apps to help you grow your business"
        description="Certified Code offers a wide range of apps that made for Wix site owners. Install them in one click to boost your site with powerful features."
        actions={
          <Button
            size="small"
            as="a"
            href="https://www.wix.com/app-market/developer/certified-code"
            target="_blank"
          >
            Discover our apps
          </Button>
        }
        imageBackgroundColor={"#FFFFFF"}
        image={
          <Box borderRadius={"8px"} direction="horizontal" gap="SP2">
            {apps.map((app: any) => {
              return (
                <Tooltip content={app.details.name}>
                  <Image
                    color="#FFFFFF"
                    width="60px"
                    src={app.details.iconUrl}
                    onClick={() => {
                      window.open(
                        `https://go.certifiedcode.global/get/${app.details.appId}`,
                        "_blank"
                      );
                    }}
                  />
                </Tooltip>
              );
            })}
          </Box>
        }
      />
    </Card>
  );
};

export default Recommends;
