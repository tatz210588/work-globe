import "./App.css";

import { Routes, Route } from "react-router-dom";
import Employer from "./pages/Employer";
import Freelancer from "./pages/Freelancer";
import Landing from "./pages/Landing";
import Messages from "./pages/Messages";
import Footer from "./components/Footer";
import JobPost from "./pages/JobPost";
import Register from "./pages/Register";
import Unregister from "./pages/Unregister";
import Profile from "./pages/Profile";
import Payments from "./pages/Payments";
import Application from "./pages/Application";
import Applicant from "./pages/applicant";
import Lancers from "./pages/Lancers"
import Feedbacks from "./pages/Feedbacks";
import Unprofile from "./pages/Unprofile";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  darkTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  polygonMumbai,
} from "wagmi/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, polygonMumbai],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <div className="App">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          coolMode
          chains={chains}
          theme={darkTheme({
            accentColor: "#04807b",
            accentColorForeground: "white",
            borderRadius: "medium",
          })}
        >
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/freelancer" element={<Freelancer />} />
            <Route exact path="/employer" element={<Employer />} />
            <Route exact path="/jobpost" element={<JobPost />} />
            <Route exact path="/messages" element={<Messages />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/unregister" element={<Unregister />} />
            <Route exact path="/Unprofile" element={<Unprofile />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/feedbacks" element={<Feedbacks />} />
            <Route exact path="/application" element={<Application />} />
            <Route exact path="/lancers" element={<Lancers />} />
            <Route exact path="/payments" element={<Payments />} />
            <Route exact path="/applicant" element={<Applicant />} />
          </Routes>
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
