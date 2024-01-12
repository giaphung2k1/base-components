import Recommends from "./Components/Recommends";
import { Page, WixDesignSystemProvider } from "@wix/design-system";

function App() {
  return (
    <WixDesignSystemProvider features={{ newColorsBranding: true }}>
      <Page minWidth={0}>
        <Page.Content>{Recommends()}</Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
}

export default App;
