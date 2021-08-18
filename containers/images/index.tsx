import Section from "../../components/Section";
import Intro from "../../components/Intro";
import IntroLink from "../../components/IntroLink";
import Link from "next/link";
import Image from "next/image";

import HiDog from "./camylla-battani-AoqgGAqrLpU-unsplash.jpg";
import SmileDog from "./joe-caione-qO-PIF84Vxg-unsplash.jpg";
import BlueDog from "./karsten-winegeart-5PVXkqt2s9k-unsplash.jpg";

export default function ImagePage() {
  return (
    <Section>
      <Link href={"/"}>Home</Link>
      <h2>Images</h2>
      <p>
        Images are often a main cause of slow webpages. Optimizing them for
        different viewports can be{" "}
        <Link href={"https://www.youtube.com/watch?v=R4sdWUI3-mY"}>
          very tedious work
        </Link>
        .
      </p>
      <Intro>
        NextJS comes with Automatic Image Optimization, helping us to reduce CLS
        and LCP by lazy loading, compressing images, adding srcset sizes and
        supporting a blurred placeholder.
        <IntroLink
          href={"https://nextjs.org/docs/basic-features/image-optimization"}
        />
      </Intro>
      <h3>Due to these features, images are:</h3>
      <ul>
        <li>Loaded in a dimension that suitable for the viewport</li>
        <li>Compressed by a customizable amount (default: 75/100)</li>
        <li>Lazy loaded as you scroll</li>
        <li>
          To reduce build time, compressed on 1st demand (can be specified)
        </li>
      </ul>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Here's some lorem ipsum that is related to the dog on the right.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <Image
            src={HiDog}
            alt={"Dog says hi"}
            placeholder={"blur"}
            layout={"responsive"}
          />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: 1 }}>
          <Image
            src={SmileDog}
            alt={"Dog says hi"}
            placeholder={"blur"}
            layout={"responsive"}
          />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          <p>Here's some lorem ipsum that is related to the dog on the left.</p>
        </div>
      </div>

      <Image
        src={BlueDog}
        alt={"Dog says hi"}
        placeholder={"blur"}
        layout={"responsive"}
      />
      <h3>Externally hosted images</h3>
      <p>
        Externally hosted images must have their (original) height and width
        specified to prevent cummulative shift. Also these images can be
        compressed on the fly, if their domain is allowed in next.config.js
      </p>
      <Image
        src={"https://unsplash.com/photos/NodtnCsLdTE/download?force=true"}
        alt={"External cat image"}
        width={"5042"}
        height={"3151"}
        layout={"responsive"}
      />
      <div
        style={{
          width: "100%",
          height: "500px",
          background: "#d79f3a",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <p>Dummy text just here to highlight shift</p>
      </div>
    </Section>
  );
}
