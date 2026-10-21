# LFT essay publishing queue

Start here when Jason asks to "post the next essay on LFT."

## Destination and site conventions

- Repository: jpdeters/latentformtheory
- Production branch: main; Cloudflare builds and publishes this branch.
- Website: https://latentformtheory.com
- Essays: src/content/essays/<slug>.md
- Essay index image: public/images/essays/<slug>/hero.jpg
- Required Markdown frontmatter: quoted title, description, and date strings.
- The essay index and individual essay routes are generated automatically.
- Every Markdown file in src/content/essays is currently published. Store unpublished drafts outside that directory.

## Queue

The first queued essay was published on October 21, 2026. Future essays may be selected from finished Google Docs under the standing authorization below.

| Order | Title | Authoritative draft source | Status | Hero image |
| --- | --- | --- | --- | --- |
| 1 | Why Two People Never See the Same Chair | [Essay 10](https://docs.google.com/document/d/19OZff8w6596fdup0kkzp1WBvgHO_ZXJRbwrr6ArGEWs/edit) | published | AI-generated editorial chair illustration |

Statuses: draft, approved, published. On October 21, 2026, Jason authorized automatic publication of one existing finished Google Docs essay every two weeks, including editorial selection and light polishing. Preserve his voice and philosophy. Do not invent autobiographical events, create new essays as substitutes, or treat unfinished outlines as publication-ready. Substantial rewrites or unresolved factual issues require Jason's input.

Publication record: Jason approved the proposed standalone edit and invitation-focused ending on October 21, 2026. The Google Doc is the original source; the published Markdown contains the approved editorial adaptation. Live URL: https://www.latentformtheory.com/essays/why-two-people-never-see-the-same-chair/

## Publishing workflow

A request to publish the next essay, or the scheduled publishing task, authorizes publication of the first suitable unpublished entry. If the queue is empty, select a finished Google Docs essay that advances the series, comparing source versions and current site content. Jason's standing authorization covers this selection and light editorial adaptation. If no sufficiently finished draft exists, notify Jason rather than inventing an essay.

1. Refresh the queue and read applicable AGENTS.md instructions.
2. Read the complete approved text from the recorded source.
3. Inspect the current content schema, routing, and essay presentation. Follow AGENTS.md requirements for consulting relevant Astro documentation.
4. Prepare the Markdown and an appropriate authorized hero image. Match existing conventions and use the actual publication date unless Jason specifies another date.
5. Check embedded images, the index card image, links, title, description, and slug. Do not overwrite existing essays.
6. Run the project build and inspect the generated essay and index before publishing. Prepare on a working branch when useful.
7. Publish to main without overwriting concurrent work, update this queue, and record the resulting URL.
8. Verify the live essay and index after Cloudflare deploys. A successful GitHub commit does not alone confirm live deployment. Report verification limits accurately.

Recurring publishing task configured: every other Wednesday morning, America/New_York, starting November 4, 2026. The task publishes to LFT and notifies Jason after live verification. Social-media posting is outside this task.

## Existing production content

Inventory inspected October 21, 2026. These dates are the files' existing content dates, not independently verified deployment dates.

| Content date | Title | Slug |
| --- | --- | --- |
| 2026-07-11 | The Dog Hidden in the Wood: What an Appalachian Craftsman Taught Me About Design | dog-hidden-in-wood |
| 2026-07-25 | The Thing Beneath The Thing | thing-within-thing |
| 2026-08-11 | Order, Chaos, and the Arrogance of Intervention | order-chaos |
| 2026-08-24 | The Architecture of Invisible Decisions | architecture-invisible-decisions |
| 2026-09-13 | Beyond Subtraction: The Discovery of Composition | beyond-subtraction |
| 2026-10-21 | Why Two People Never See the Same Chair | why-two-people-never-see-the-same-chair |

Beyond Subtraction already exists in production content; do not treat it as the next unpublished essay based on older planning notes.
