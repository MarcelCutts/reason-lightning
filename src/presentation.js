// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Fill,
  Appear,
  Layout,
  Image,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import styled from "react-emotion";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#555",
    tertiary: "#db4d3f",
    quartenary: "#CECECE",
    ts: "#007acc",
    flow: "#2d343a",
    ft: "#e8bd36",
    elm: "#60b5cc",
    r: "#db4d3f"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  flow: require("./assets/flow.png"),
  elm: require("./assets/elm.png"),
  reasonml: require("./assets/reasonml.jpg"),
  typescript: require("./assets/typescript.png"),
  owl: require("./assets/owl.png"),
  baseowl: require("./assets/baseowl.jpg"),
  usetypes: require("./assets/usetypes.jpg"),
  festival: require("./assets/festival.webm"),
  o: require("./assets/o.gif"),
  o2: require("./assets/o2.gif"),
  resplash: require("./assets/resplash.png"),
  name: require("./assets/name.svg"),
  ts1: require("./assets/ts1.png"),
  ts2: require("./assets/ts2.png"),
  ts3: require("./assets/ts3.png"),
  flow1: require("./assets/flow1.png"),
  flow2: require("./assets/flow2.png"),
  flow3: require("./assets/flow3.png"),
  babel: require("./assets/babel.png"),
  esLint: require("./assets/es-lint.png"),
  prettier: require("./assets/prettier.png"),
  glasses: require("./assets/glasses.gif"),
  fast: require("./assets/fast.png"),
  artist: require("./assets/artist.png"),
  festival: require("./assets/festival.png"),
  prod: require("./assets/prod.png"),
  btwitter: require("./assets/btwitter.png")
};

// Hellop
// Only Hype
// We want more
// Reason syntax and toolchain for OCaml
// A realistic way of writing typesound javascript applications
// TYPES
//// TPYES
// Why aren't types everywheref
// Failures of flow - slow, editor, build process
// Failures of elm - 0.19
// Failures of TS - burger
// ReasonML - what is it and how come its better?
//
// ReasonReact
// Is it used in production
//

const HighlightTextDarkGrey = styled("span")`
  color: rgb(43, 21, 21);
`;

const WhiteOnRed = styled("span")`
  color: white;
  background: #db4d3f;
  padding: 5px;
`;

const FunHeading = styled(Heading)`
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  border: none;
  font: normal 84px / normal "Anton", Helvetica, sans-serif;
  color: rgb(224, 69, 86);
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
  text-shadow: 1px 1px 0 #fff, 2px 2px 0 #db4d3f, 3px 3px 0 #01667f, 4px 4px 0 #333333;
`;

const GreyedImage = styled(Image)`
  filter: grayscale(100%);
`;

const WhiteImageBorder = styled(Image)`
  border: white solid 1px;
  background: white;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary" bgImage={images.o}>
          <Image src={images.resplash} bgColor="rgba(255,255,255,0.8)" padding="20px" />
          <Image src={images.name} margin="50px 0 0 0" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <FunHeading fit size={1} caps lineHeight={1} margin="0 0 0 -20px" textColor="secondary">
            Hype!
          </FunHeading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={2} textAlign="left" textColor="primary" margin={10}>
            ReasonML is a language and toolchain for <HighlightTextDarkGrey>joyfully</HighlightTextDarkGrey> writing
            type sound code for <HighlightTextDarkGrey>realistic</HighlightTextDarkGrey> problems.
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Joy in...
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🏋🏿‍♂️ Confidence in code
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🏎 Faster refactoring
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💥 No runtime errors
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Joy in...
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            📝 Fewer test cases
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            👓 Improved readability
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🛠 Tooling support
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Joy in...
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            ⛴ Easy onboarding
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            👩‍🎤 Team harmony
          </Heading>
          <Heading size={4} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🚴‍♀️ Hipster cred
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <FunHeading fit size={1} caps lineHeight={1} margin="0 0 0 -20px" textColor="secondary">
            Hype!
          </FunHeading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <FunHeading fit size={1} caps lineHeight={1} margin="0 0 0 -20px" textColor="secondary">
            Type!
          </FunHeading>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            They <HighlightTextDarkGrey>promised</HighlightTextDarkGrey>
          </Heading>
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            a lot
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary" bgImage={images.glasses} />
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit caps lineHeight={1} textColor="secondary">
            why aren't types
          </Heading>

          <Heading fit caps lineHeight={1} textColor="tertiary">
            everywhere?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary" />
          <Heading size={2} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🇺🇸 Boston: 10%
          </Heading>
          <Heading size={2} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🇬🇧 Manchester: 15%
          </Heading>
          <Heading size={2} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🇩🇪 Berlin: 35%
          </Heading>
          <Heading size={2} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🇷🇴 Iași: 2%
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.flow} height="200px" />
              <Appear>
                <Heading margin="0 0 50px 0" size={3} caps lineHeight={1} textColor="secondary">
                  2014
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Image src={images.typescript} height="200px" />
              <Appear>
                <Heading margin="0 0 50px 0" size={3} caps lineHeight={1} textColor="secondary">
                  2012
                </Heading>
              </Appear>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.elm} height="200px" />
              <Appear>
                <Heading size={3} caps lineHeight={1} textColor="secondary">
                  2012
                </Heading>
              </Appear>
            </Fill>
            <Fill>
              <Image src={images.reasonml} height="200px" />
              <Appear>
                <Heading size={3} caps lineHeight={1} textColor="secondary">
                  2016
                </Heading>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.usetypes}>
          <Heading
            fit
            size={1}
            bgColor="white"
            padding="5px"
            caps
            margin="00px 0 0 0"
            lineHeight={1}
            textColor="tertiary"
          >
            Use tyyyypes
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Image src={images.baseowl} height="600px" />
        </Slide>
        <Slide transition={["slide"]} bgColor="white">
          <Image src={images.owl} height="600px" />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Fill>
              <Heading size={5} caps lineHeight={1} textColor="secondary">
                Tooling
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Slow checks
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Packages
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Bad errors
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Setup
              </Heading>
            </Fill>
            <Fill>
              <Heading size={5} caps lineHeight={1} textColor="secondary">
                Language
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Annotation
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Permissive
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                External
              </Heading>
              <Heading size={6} caps textColor="tertiary" margin={10} padding={"30px 0"}>
                Features
              </Heading>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1} textColor="secondary">
            Frustrations
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            🐢 "Makes my PC crawl"
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💥 "It breaks things"
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💼 "Brings so many chores"
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="tertiary" margin={10} padding={"30px 0"}>
            💸 "Doesn't seem worth it"
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="ts">
          <WhiteImageBorder src={images.typescript} border="white" width="50%" />
        </Slide>
        <Slide transition={["slide"]} bgColor="ts">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            TOOLING! 🎉
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="ts">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            CONFIGURATION 👎
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            🇪🇪 54 Compiler Flags
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            🎰 153 TS Lint Options
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="ts">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            TOO PERMISSIVE 👎
          </Heading>

          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            📝 Implicit any
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            👓 Implicit use of this
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            🛠 No checking that properties are initialised
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            🛠 No checking on function types
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="ts">
          <Heading size={2} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            Strict ✅
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            🕵️‍♀️ Inference
          </Heading>
          <Heading size={5} caps textAlign="left" textColor="primary" margin={10} padding={"30px 0"}>
            ❌ Errors
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.ts1} />

        <Slide transition={["slide"]} bgImage={images.ts2} />

        <Slide transition={["slide"]} bgImage={images.ts3} />

        <Slide transition={["slide"]} bgColor="flow">
          <Image src={images.flow} border="white" width="50%" />
        </Slide>

        {/* <Slide transition={["slide"]} bgColor="primary">
          Flow rant variadic parameter
        </Slide> */}
        <Slide transition={["slide"]} bgColor="flow">
          <Heading fit size={1} caps lineHeight={1} textColor="ft">
            GREAT TYPES! 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="flow">
          <Heading fit size={1} caps lineHeight={1} textColor="ft">
            Errors! 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="flow">
          <Heading fit size={1} caps lineHeight={1} textColor="ft">
            Inference! 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.flow1} />

        <Slide transition={["slide"]} bgImage={images.flow2} />

        <Slide transition={["slide"]} bgImage={images.flow3} />

        <Slide transition={["slide"]} bgColor="flow">
          <Heading fit size={1} caps lineHeight={1} textColor="ft">
            Idiomatic JS 👎
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="flow">
          <Heading fit size={1} caps lineHeight={1} textColor="ft">
            Tooling 👎
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="flow">
          <Heading fit size={1} caps lineHeight={1} textColor="ft">
            Build process 👎
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="flow">
          <Layout>
            <Fill>
              <Image src={images.flow} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.babel} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.esLint} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.prettier} height="250px" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["slide"]} bgColor="elm">
          <WhiteImageBorder src={images.elm} width="50%" background="white" />
        </Slide>
        <Slide transition={["slide"]} bgColor="elm">
          <Heading fit size={1} caps lineHeight={1} textColor="white">
            Types! 🎉
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="elm">
          <Heading fit size={1} caps lineHeight={1} textColor="white">
            Speed! 🎉
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="elm">
          <Heading fit size={1} caps lineHeight={1} textColor="white">
            Bespoke! 🎉
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="elm">
          <Heading fit size={1} caps lineHeight={1} textColor="white">
            Bundle size 👎
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="elm">
          <Heading fit size={1} caps lineHeight={1} textColor="white">
            0.19 👎
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image src={images.flow} height="300px" />
            </Fill>
            <Fill>
              <Image src={images.typescript} height="300px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.elm} height="300px" />
            </Fill>
            <Fill>
              <Image src={images.reasonml} height="300px" />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <GreyedImage src={images.flow} height="300px" />
            </Fill>
            <Fill>
              <GreyedImage src={images.typescript} height="300px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <GreyedImage src={images.elm} height="300px" />
            </Fill>
            <Fill>
              <Image src={images.reasonml} height="300px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="tertiary">
          <WhiteImageBorder src={images.reasonml} width="50%" background="white" />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2}>OCaml/Reason</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>Bucklescript</Heading>
          <Text margin={"30px 0"}>⬇️</Text>
          <Heading size={2}>JavaScript</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1}>
            It's <WhiteOnRed>lean</WhiteOnRed>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Layout>
            <Fill>
              <Image src={images.flow} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.babel} height="250px" />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.esLint} height="250px" />
            </Fill>
            <Fill>
              <Image src={images.prettier} height="250px" />
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            2ms 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading fit size={1} lineHeight={1} textColor="primary">
            tiny BUNDLES 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading fit size={1} lineHeight={1} textColor="primary">
            Fast 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading fit size={1} lineHeight={1} textColor="primary">
            <Image src={images.fast} />
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1}>
            It's <WhiteOnRed>pragmatic</WhiteOnRed>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Syntax 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            JSX 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Interop 🎉
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading fit size={1} caps lineHeight={1}>
            It's <WhiteOnRed>joyful</WhiteOnRed>
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Inference 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Errors 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="r">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Community 🎉
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.artist} />
        <Slide transition={["slide"]} bgImage={images.festival} />

        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            Is it being used in
          </Heading>
          <Heading fit size={1} caps lineHeight={1} textColor="primary">
            <HighlightTextDarkGrey>PRODUCTION?</HighlightTextDarkGrey>
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="r">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            YES
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.prod} />

        <Slide transition={["zoom"]} bgColor="primary" bgImage={images.o2}>
          <Heading size={1} caps lineHeight={1} bgColor="rgba(0,0,0,0.5)" padding="50px" textColor="primary">
            THANKS!
          </Heading>
          <Image src={images.btwitter} margin="40px 0 0 0" />
        </Slide>
      </Deck>
    );
  }
}
