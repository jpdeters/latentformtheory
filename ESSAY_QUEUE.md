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

No approved unpublished essays remain. The first queued essay was published on October 21, 2026.

| Order | Title | Authoritative draft source | Status | Hero image |
| --- | --- | --- | --- | --- |
| 1 | Why Two People Never See the Same Chair | [Essay 10](https://docs.google.com/document/d/19OZff8w6596fdup0kkzp1WBvgHO_ZXJRbwrr6ArGEWs/edit) | published | AI-generated editorial chair illustration |

Statuses: draft, approved, published. Approval must come from Jason, not from an assistant's inference. Preserve approved prose; substantive editorial changes require approval.

Publication record: Jason approved the proposed standalone edit and invitation-focused ending on October 21, 2026. The Google Doc is the original source; the published Markdown contains the approved editorial adaptation. Live URL: https://www.latentformtheory.com/essays/why-two-people-never-see-the-same-chair/

## Publishing workflow

A request to publish the next essay authorizes publication of the first approved, unpublished entry in queue order. If none exists, ask Jason to identify or provide the next essay rather than inventing text, order, or approval.

1. Refresh the queue and read applicable AGENTS.md instructions.
2. Read the complete approved text from the recorded source.
3. Inspect the current content schema, routing, and essay presentation. Follow AGENTS.md requirements for consulting relevant Astro documentation.
4. Prepare the Markdown and an appropriate authorized hero image. Match existing conventions and use the actual publication date unless Jason specifies another date.
5. Check embedded images, the index card image, links, title, description, and slug. Do not overwrite existing essays.
6. Run the project build and inspect the generated essay and index before publishing. Prepare on a working branch when useful.
7. Publish to main without overwriting concurrent work, update this queue, and record the resulting URL.
8. Verify the live essay and index after Cloudflare deploys. A successful GitHub commit does not alone confirm live deployment. Report verification limits accurately.

No recurring publication schedule is configured.

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
