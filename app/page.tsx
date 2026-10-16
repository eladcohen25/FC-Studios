import { Hero } from "@/components/Hero";
import {
  CenterCta,
  Dimensions,
  FullImage,
  Intro,
  NextCard,
  PairSmallLeft,
  PortraitPair,
  Quote,
  Statement,
  StudioAside,
  StudioCaption,
  StudioLead,
} from "@/components/blocks";
import { Carousel } from "@/components/Carousel";
import { Information } from "@/components/Information";
import { studios } from "@/content/studios";
import { beyond, configurations, dimensions, information, intro, nextCard, quote } from "@/content/site";

/*
  Homepage, block by block, following the reference page's rhythm:
  pinned hero → intro → image rows with copy → quote → dimensions →
  serif statements → carousel → CTA → information → next card.
*/
export default function Home() {
  const [office, golf, performance, entertainment, casita, custom] = studios;

  return (
    <>
      <Hero />

      {/* Everything below slides over the pinned hero */}
      <div
        className="relative z-10 flex flex-col gap-y-[var(--block)] pb-[var(--block)]"
        style={{ background: "var(--bg)", ["--block" as string]: "clamp(56px, 7vw, 128px)" }}
      >
        <Intro label={intro.label} body={intro.body} />

        <div id="studios" className="flex flex-col gap-y-[var(--block)]">
          {/* 01 Office */}
          <StudioLead studio={office} index={0} />
          <FullImage src={office.images.wide!} alt="S Series office studio exterior" />

          <Quote text={quote.text} attribution={quote.attribution} />

          {/* 02 Golf */}
          <PairSmallLeft small={golf.images.landscape} large={golf.images.portrait} alt="Golf studio rendering" />
          <FullImage src={golf.images.wide!} alt="Golf studio rendering" ratio="16 / 10" />
          <StudioAside studio={golf} index={1} />

          {/* 03 Performance */}
          <StudioCaption studio={performance} index={2} />

          <Dimensions line1={dimensions.line1} line2={dimensions.line2} />

          {/* Built beyond the standard */}
          <Statement text={beyond.statement} />
          <PortraitPair
            left={entertainment.images.portrait}
            right={performance.images.portraitB!}
            alt="Multi-unit S Series arrangement"
            caption={beyond.body}
          />
          <FullImage src={performance.images.wide!} alt="S Series performance studio at night" />

          {/* 04 Entertainment */}
          <Statement text={entertainment.tagline} align="center" />
          <PortraitPair
            left={entertainment.images.portraitB!}
            right={entertainment.images.portrait}
            alt="Entertainment studio rendering"
            caption={
              <>
                <span className="font-medium">04 — {entertainment.name}</span> — {entertainment.body}
              </>
            }
          />
          <FullImage src={entertainment.images.wide!} alt="Entertainment studio rendering" ratio="16 / 9" />

          {/* 05 Casita */}
          <PortraitPair
            left={casita.images.portrait}
            right={casita.images.portraitB!}
            alt="Casita studio rendering"
            caption={
              <>
                <span className="font-medium">05 — {casita.name}</span> — {casita.body}
              </>
            }
            captionUnder="right"
          />

          {/* 06 Custom */}
          <Statement text={custom.tagline} />
          <StudioAside studio={custom} index={5} />
        </div>

        <Carousel title="Configurations" slides={configurations} />

        <CenterCta label={beyond.cta.label} href={beyond.cta.href} />

        <Information heading={information.heading} image={information.image} items={information.items} />

        <NextCard {...nextCard} />
      </div>
    </>
  );
}
