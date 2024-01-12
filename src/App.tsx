import Recommends from "./Components/Recommends";
import { Page, WixDesignSystemProvider } from "@wix/design-system";
import "@wix/design-system/styles.global.css";
function App() {
  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page minWidth={100}>
        <Page.Content>
          <Recommends />
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
}

export default App;
