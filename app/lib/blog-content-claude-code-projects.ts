import type { BlogArticle } from "./blog-types.ts";

export const claudeCodeProjectsArticles: BlogArticle[] = [
  {
    "status": "published",
    "articleType": "main",
    "cluster": "Claude Code Projects",
    "targetSearchIntent": "Understand the redesigned Claude Code Projects product, how its coordinator and parallel cloud threads work, who can access it, and its important limitations.",
    "targetQuery": "Claude Code Projects",
    "slug": "claude-code-projects",
    "title": "Claude Code Projects: Parallel Agents, Threads & Beta Guide",
    "metaTitle": "Claude Code Projects: Parallel Agents, Threads & Beta Guide",
    "metaDescription": "Claude Code Projects now coordinates parallel cloud coding sessions from one conversation. Learn how threads, branches, memory, PRs, rollout and limits work.",
    "h1": "Claude Code Projects: How Parallel Cloud Agents Work",
    "excerpt": "Claude Code Projects now coordinates parallel cloud coding sessions from one conversation. Learn how threads, branches, memory, PRs, rollout and limits work.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for Claude Code Projects: Parallel Agents, Threads & Beta Guide",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Claude Code Projects has been redesigned from a place for grouping work into an active coordinator for multiple coding-agent sessions. Anthropic announced the new Projects experience on September 17, 2026, and began a beta rollout to select Claude Pro and Max subscribers who use cloud sessions in Claude Code."
          }
        ]
      },
      {
        "id": "what-changed-in-claude-code-projects",
        "title": "What changed in Claude Code Projects?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The central change is delegation. Instead of manually opening several coding sessions, dividing a larger job between them, and stitching the results together yourself, you can describe the overall engineering goal in a Project conversation. Claude can scope that request, split it into pieces, start parallel threads, coordinate their progress, review the outputs, and assemble the result."
          },
          {
            "type": "paragraph",
            "html": "Anthropic describes this as moving Projects “from folder to conversation.” The Project conversation acts as the coordinator; the work can fan out into separate Claude Code cloud sessions."
          }
        ]
      },
      {
        "id": "how-claude-code-projects-threads-work",
        "title": "How Claude Code Projects threads work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A thread is not merely a sub-chat. Anthropic says Project work can run as parallel Claude Code cloud sessions. That matters because each thread can work independently rather than waiting for another task to finish."
          },
          {
            "type": "paragraph",
            "html": "For repository work, threads can operate on separate branches and can open pull requests. If parallel work eventually touches conflicting code, normal Git merge-conflict handling still applies; the coordinator does not magically remove source-control conflicts."
          },
          {
            "type": "paragraph",
            "html": "Anthropic's launch examples include profiling and optimizing multiple endpoints in parallel and coordinating a deprecated API migration across API, web, and mobile repositories."
          }
        ]
      },
      {
        "id": "the-coordinator-model",
        "title": "The coordinator model",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The Project conversation is the control layer. You provide the broader objective and steer the work while Claude decides how to decompose suitable tasks into threads. The coordinator can track what the threads report back, review their results, and bring the work together."
          },
          {
            "type": "paragraph",
            "html": "This makes Projects closer to a managed team of coding sessions than a conventional saved chat folder."
          }
        ]
      },
      {
        "id": "projects-can-keep-working-when-you-step-away",
        "title": "Projects can keep working when you step away",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Because the current threads run as cloud sessions, Anthropic says work can continue after you step away from your computer. You can return to the Project and inspect progress instead of keeping a local terminal process alive for every parallel job."
          },
          {
            "type": "paragraph",
            "html": "Anthropic also says users can steer progress throughout the work, including from a phone, although availability of individual surfaces may vary during the beta rollout."
          }
        ]
      },
      {
        "id": "shared-project-context",
        "title": "Shared project context",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects are intended to reduce repeated context setup across a long-running engineering effort. Repository context, project instructions, files, and accumulated project knowledge can give new work a common foundation rather than forcing you to restate the same decisions in every independent session."
          },
          {
            "type": "paragraph",
            "html": "This is particularly useful for work that spans several components or repositories, where separate agents need to understand the same high-level goal."
          }
        ]
      },
      {
        "id": "pull-requests-and-parallel-repository-work",
        "title": "Pull requests and parallel repository work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "A practical Project workflow can look like this:"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "Give Claude a project-level engineering objective.",
              "Claude identifies work that can run independently.",
              "Parallel threads operate as Claude Code cloud sessions.",
              "Repository work occurs on separate branches where appropriate.",
              "Threads test their changes and can open pull requests.",
              "The Project conversation tracks results and dependencies.",
              "You review the output and decide what should land."
            ]
          },
          {
            "type": "paragraph",
            "html": "The important distinction is that Projects coordinates software work; it does not remove normal engineering review, CI, testing, or Git conflict resolution."
          }
        ]
      },
      {
        "id": "who-can-use-the-redesigned-projects",
        "title": "Who can use the redesigned Projects?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Anthropic launched the updated Projects experience in beta on September 17, 2026. Initial access is for select Pro and Max subscribers using cloud sessions in Claude Code. Anthropic says access will expand to more Claude Code users on those plans over the following week, with updated Projects across broader Claude experiences and Team and Enterprise plans coming later."
          },
          {
            "type": "paragraph",
            "html": "Existing Projects are not necessarily converted immediately during the staged rollout."
          },
          {
            "type": "paragraph",
            "html": "If Projects is not visible on an otherwise eligible account, staged availability is therefore a plausible explanation. Do not assume every Pro or Max account receives the redesign simultaneously."
          }
        ]
      },
      {
        "id": "does-claude-code-projects-run-locally",
        "title": "Does Claude Code Projects run locally?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The redesigned beta is centered on Claude Code cloud sessions. Anthropic says support for working with local tools and code is coming, but it has not provided a verified public launch date for that capability."
          },
          {
            "type": "paragraph",
            "html": "That distinction matters for developers whose repositories, services, databases, or tooling are only reachable from a private local or corporate environment."
          }
        ]
      },
      {
        "id": "how-much-does-claude-code-projects-cost",
        "title": "How much does Claude Code Projects cost?",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Anthropic has not announced a separate universal price for Projects. Access currently depends on eligible Claude plans and the staged beta."
          },
          {
            "type": "paragraph",
            "html": "Parallelism also has a cost in usage: multiple active threads are multiple Claude Code sessions, so a Project can consume plan usage faster than a single sequential session. Exact practical consumption depends on the number of threads, models, effort, task length, and the limits attached to the user's plan."
          },
          {
            "type": "paragraph",
            "html": "There is no responsible single “cost per Project” number to publish from the current launch information."
          }
        ]
      },
      {
        "id": "where-projects-could-be-useful",
        "title": "Where Projects could be useful",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The strongest use cases are engineering jobs that contain independent workstreams: multi-repository migrations, endpoint profiling, test expansion, dependency upgrades, refactors across components, bug investigation, and changes that can be reviewed as separate pull requests."
          },
          {
            "type": "paragraph",
            "html": "Projects may be less advantageous for a small linear edit where parallel sessions add coordination overhead without shortening the critical path."
          }
        ]
      },
      {
        "id": "important-limitations",
        "title": "Important limitations",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects is a beta and its rollout is still changing. Current work is cloud-session based. Parallel agents can consume usage limits faster. Separate branches can still conflict. Human review remains important before merging generated changes, especially for security-sensitive or production-critical systems."
          },
          {
            "type": "paragraph",
            "html": "Anthropic has also not announced a standalone Projects API, standalone Projects price, or a confirmed date for local execution in the launch material reviewed here."
          }
        ]
      },
      {
        "id": "claude-code-projects-faq",
        "title": "Claude Code Projects FAQ",
        "blocks": [
          {
            "type": "subheading",
            "text": "Is Claude Code Projects a multi-agent feature?"
          },
          {
            "type": "paragraph",
            "html": "It can coordinate multiple parallel Claude Code cloud-session threads from one Project conversation. Calling it a multi-agent workflow is reasonable, but each thread should be understood as a coding session rather than as proof of a new underlying Claude model."
          },
          {
            "type": "subheading",
            "text": "Can Claude Code Projects work on multiple repositories?"
          },
          {
            "type": "paragraph",
            "html": "Anthropic's own launch example describes coordinating an API migration across API, web, and mobile repositories, making multi-repository engineering one of the intended workflows."
          },
          {
            "type": "subheading",
            "text": "Can Projects open pull requests?"
          },
          {
            "type": "paragraph",
            "html": "Anthropic describes threads doing repository work, running tests, and opening pull requests as part of coordinated workflows."
          },
          {
            "type": "subheading",
            "text": "Does it keep running after I close my laptop?"
          },
          {
            "type": "paragraph",
            "html": "Current Project threads run in Claude Code cloud sessions, and Anthropic says work can continue after you step away from your computer."
          },
          {
            "type": "subheading",
            "text": "Is it available to every Claude user?"
          },
          {
            "type": "paragraph",
            "html": "No. The redesigned experience launched as a staged beta, initially for select Pro and Max users of Claude Code cloud sessions. Broader access is planned."
          },
          {
            "type": "subheading",
            "text": "Is local Claude Code Projects available?"
          },
          {
            "type": "paragraph",
            "html": "Not in the same form as the current cloud-thread beta. Anthropic says local tools and code support is coming, without a verified release date."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Claude Code Projects changes the unit of interaction from one coding session to an ongoing engineering goal. The coordinator can split that goal across parallel cloud sessions, preserve shared project context, and bring results back into one place. The early advantage is less manual orchestration; the tradeoffs are faster usage consumption, cloud-first access, beta availability, and the same need for careful code review and source-control discipline."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "claude.com",
        "url": "https://claude.com/blog/projects-redesigned"
      },
      {
        "label": "theverge.com",
        "url": "https://www.theverge.com/ai-artificial-intelligence/997134/anthropic-claude-code-projects"
      },
      {
        "label": "sdtimes.com",
        "url": "https://sdtimes.com/claude/a-new-experience-for-claude-projects-now-available-in-beta-in-claude-code/"
      }
    ],
    "relatedPaths": []
  },
  {
    "status": "published",
    "articleType": "supporting",
    "cluster": "Claude Code Projects",
    "targetSearchIntent": "Set up and operate a Claude Code Project so a larger engineering goal can be delegated safely across parallel cloud-session threads.",
    "targetQuery": "how to use Claude Code Projects",
    "parentSlug": "claude-code-projects",
    "slug": "how-to-use-claude-code-projects",
    "title": "How to Use Claude Code Projects for Parallel Coding Work",
    "metaTitle": "How to Use Claude Code Projects for Parallel Coding Work",
    "metaDescription": "A practical guide to Claude Code Projects: define a goal, provide shared context, delegate parallel threads, review PRs, manage conflicts and control usage.",
    "h1": "How to Use Claude Code Projects for Parallel Coding Work",
    "excerpt": "A practical guide to Claude Code Projects: define a goal, provide shared context, delegate parallel threads, review PRs, manage conflicts and control usage.",
    "category": "AI",
    "author": "Project Monet Editorial Team",
    "datePublished": "2026-09-21",
    "dateModified": "2026-09-21",
    "ogAlt": "Project Monet editorial illustration for How to Use Claude Code Projects for Parallel Coding Work",
    "sections": [
      {
        "id": "overview",
        "title": "Overview",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The redesigned Claude Code Projects feature is built for engineering work that is larger than one coding session. Instead of manually splitting a project into several chats, you can give one Project a broader goal and let Claude coordinate parallel cloud-session threads."
          },
          {
            "type": "paragraph",
            "html": "This guide focuses on the workflow rather than the broad product overview. Because Projects launched as a staged beta on September 17, 2026, exact interface labels may change; the durable concepts are the project goal, shared context, coordinator, threads, branches, pull requests, review, and usage control."
          }
        ]
      },
      {
        "id": "1-check-that-the-redesigned-projects-beta-is-available",
        "title": "1. Check that the redesigned Projects beta is available",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Anthropic initially made the updated Projects available to select Pro and Max subscribers using cloud sessions in Claude Code. Access is expanding in stages."
          },
          {
            "type": "paragraph",
            "html": "If your account still shows the older Projects experience or does not expose the redesign, that does not necessarily mean your setup is broken. Anthropic explicitly described a staged rollout, with broader Claude and Team/Enterprise access coming later."
          },
          {
            "type": "paragraph",
            "html": "Do not rely on an unofficial workaround to force access to a beta your account has not received."
          }
        ]
      },
      {
        "id": "2-choose-a-goal-that-benefits-from-parallel-work",
        "title": "2. Choose a goal that benefits from parallel work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Projects is most useful when a job contains several workstreams that can proceed independently."
          },
          {
            "type": "paragraph",
            "html": "Good examples include:"
          },
          {
            "type": "list",
            "items": [
              "profiling several API endpoints;",
              "migrating callers across API, web, and mobile repositories;",
              "investigating independent bugs;",
              "expanding tests across components;",
              "upgrading dependencies in separable packages;",
              "implementing several related changes that can land as separate pull requests."
            ]
          },
          {
            "type": "paragraph",
            "html": "A tiny one-file edit is usually a poor reason to start several full coding sessions. Parallelism adds coordination and usage cost, so use it when there is actual independent work to parallelize."
          }
        ]
      },
      {
        "id": "3-give-the-project-a-clear-outcome",
        "title": "3. Give the Project a clear outcome",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Write the objective at the project level, not as a pile of disconnected micro-prompts."
          },
          {
            "type": "paragraph",
            "html": "A useful goal explains the desired outcome, important constraints, how success should be tested, and what must not change. For example, a performance project might identify the latency metric to improve, the endpoints in scope, the acceptable behavior changes, and the tests that must remain green."
          },
          {
            "type": "paragraph",
            "html": "The redesigned Project conversation acts as the coordinator. A clear objective gives that coordinator a better basis for deciding which pieces deserve separate threads."
          }
        ]
      },
      {
        "id": "4-provide-shared-context-before-delegating",
        "title": "4. Provide shared context before delegating",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Parallel agents are only useful when they share the right assumptions."
          },
          {
            "type": "paragraph",
            "html": "Add the repositories, files, project instructions, architectural constraints, acceptance criteria, and important decisions needed across the work. Keep instructions focused: naming conventions, test commands, security constraints, directories that should not change, compatibility requirements, and the definition of done are more useful than generic prose."
          },
          {
            "type": "paragraph",
            "html": "The purpose is to avoid explaining the same project state independently to every worker session."
          }
        ]
      },
      {
        "id": "5-ask-claude-to-scope-the-work",
        "title": "5. Ask Claude to scope the work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Give the coordinator the overall job and let it identify parallelizable pieces. You can still steer the decomposition if there are dependencies Claude should respect."
          },
          {
            "type": "paragraph",
            "html": "For example, a multi-repository API migration may have one thread for the API implementation, one for the web client, and another for the mobile client. If the clients cannot be merged before the API change, state that dependency explicitly."
          },
          {
            "type": "paragraph",
            "html": "Anthropic's launch material specifically uses multi-repository migration as an example of Project coordination."
          }
        ]
      },
      {
        "id": "6-let-independent-work-run-in-threads",
        "title": "6. Let independent work run in threads",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Each thread can operate as a Claude Code cloud session. For repository work, threads can use their own branches and work concurrently."
          },
          {
            "type": "paragraph",
            "html": "This is the key difference from simply asking one long-running Claude session to perform a sequence of tasks: independent work does not have to wait for the previous task to finish."
          },
          {
            "type": "paragraph",
            "html": "Because these are cloud sessions, Anthropic says they can keep working when you step away from your computer."
          }
        ]
      },
      {
        "id": "7-track-the-project-not-just-individual-threads",
        "title": "7. Track the Project, not just individual threads",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Use the Project conversation as the control surface for the overall objective. Check which workstreams are complete, which are blocked, what dependencies have appeared, and whether the original plan needs to change."
          },
          {
            "type": "paragraph",
            "html": "You can inspect or steer individual threads when necessary, but avoid turning yourself back into the manual dispatcher for every small step. The value of Projects is that the coordinator can manage the division of labor while you supervise the goal."
          }
        ]
      },
      {
        "id": "8-treat-pull-requests-as-review-boundaries",
        "title": "8. Treat pull requests as review boundaries",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Parallel coding is safer when independent work produces reviewable changes."
          },
          {
            "type": "paragraph",
            "html": "Where appropriate, let threads test their changes and open separate pull requests. Review each PR for correctness, scope, security, test coverage, and unexpected changes before merging it."
          },
          {
            "type": "paragraph",
            "html": "Claude coordinating the work is not a substitute for code review. Generated code can still be wrong, and two individually valid changes can interact badly when combined."
          }
        ]
      },
      {
        "id": "9-expect-normal-git-conflicts",
        "title": "9. Expect normal Git conflicts",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Separate branches reduce accidental overlap but do not eliminate it. If two threads modify the same code, their changes can produce a normal merge conflict."
          },
          {
            "type": "paragraph",
            "html": "Do not interpret a conflict as a failure of the multi-agent workflow. Resolve it the same way you would resolve conflicting human branches: understand both intended changes, choose the correct combined state, rerun tests, and review the final diff."
          }
        ]
      },
      {
        "id": "10-control-parallelism-to-control-usage",
        "title": "10. Control parallelism to control usage",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Every additional thread is real work, not a free background subtask. Anthropic warns that Projects can reach plan usage limits faster because multiple threads are full Claude Code sessions."
          },
          {
            "type": "paragraph",
            "html": "Start with the smallest useful number of parallel workstreams. Do not create ten threads merely because ten tasks can be named. Parallelize jobs whose simultaneous execution meaningfully shortens the project or separates risky changes."
          },
          {
            "type": "paragraph",
            "html": "There is no universal per-Project cost or token number in Anthropic's launch announcement, so monitor the usage information available to your account rather than relying on a fixed estimate."
          }
        ]
      },
      {
        "id": "11-review-the-integrated-result",
        "title": "11. Review the integrated result",
        "blocks": [
          {
            "type": "paragraph",
            "html": "After the threads report back, review the system as a whole. Run the appropriate test suite, type checks, linting, security checks, integration tests, and production-like validation required by the repository."
          },
          {
            "type": "paragraph",
            "html": "A Project can coordinate independent implementation, but the final software still needs system-level verification after branches interact."
          }
        ]
      },
      {
        "id": "12-preserve-useful-decisions-for-future-work",
        "title": "12. Preserve useful decisions for future work",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Long-running Projects become more valuable when important constraints and decisions remain part of project context. Record durable facts such as changed release requirements, architecture decisions, migration order, or components that should not be touched."
          },
          {
            "type": "paragraph",
            "html": "Avoid filling project context with transient logs or duplicated information that makes later work harder to interpret."
          }
        ]
      },
      {
        "id": "example-multi-repository-api-migration",
        "title": "Example: multi-repository API migration",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Suppose a product has separate API, web, and mobile repositories and needs to retire a v1 endpoint."
          },
          {
            "type": "paragraph",
            "html": "A sensible Project workflow is:"
          },
          {
            "type": "list",
            "ordered": true,
            "items": [
              "State the end goal and compatibility deadline.",
              "Give Claude access to the relevant repositories and migration constraints.",
              "Ask it to map callers and dependencies before editing.",
              "Run the API implementation and client migrations as separate threads where dependencies permit.",
              "Have each thread test its own repository and prepare a reviewable PR.",
              "Let the coordinator report merge order and blockers.",
              "Review and merge in the required dependency order.",
              "Run cross-system tests after integration."
            ]
          },
          {
            "type": "paragraph",
            "html": "This closely matches the type of workflow Anthropic uses to explain the redesigned feature."
          }
        ]
      },
      {
        "id": "what-not-to-do",
        "title": "What not to do",
        "blocks": [
          {
            "type": "paragraph",
            "html": "Do not use maximum parallelism by default. Do not merge every generated PR automatically. Do not assume cloud sessions can reach private local infrastructure that has not been made available to them. Do not invent a local-execution setup while Anthropic still describes that capability as coming later. And do not give several threads overlapping ownership of the same critical code unless the coordination benefit clearly outweighs the conflict risk."
          }
        ]
      },
      {
        "id": "if-claude-code-projects-is-not-showing",
        "title": "If Claude Code Projects is not showing",
        "blocks": [
          {
            "type": "paragraph",
            "html": "First consider rollout status. The redesigned experience began with select Pro and Max users and is expanding in stages. Existing Projects may also continue using the prior behavior until the rollout reaches them."
          },
          {
            "type": "paragraph",
            "html": "If your account should be eligible, rely on Anthropic's current product/help surfaces for the latest availability rather than third-party instructions written during an earlier beta stage."
          }
        ]
      },
      {
        "id": "bottom-line",
        "title": "Bottom line",
        "blocks": [
          {
            "type": "paragraph",
            "html": "The best way to use Claude Code Projects is to manage an engineering outcome rather than micromanage a collection of agents. Give the coordinator a clear goal and shared context, parallelize only genuinely independent work, use branches and PRs as review boundaries, watch usage, and validate the combined result like any other production code change."
          }
        ]
      }
    ],
    "sources": [
      {
        "label": "claude.com",
        "url": "https://claude.com/blog/projects-redesigned"
      },
      {
        "label": "theverge.com",
        "url": "https://www.theverge.com/ai-artificial-intelligence/997134/anthropic-claude-code-projects"
      },
      {
        "label": "sdtimes.com",
        "url": "https://sdtimes.com/claude/a-new-experience-for-claude-projects-now-available-in-beta-in-claude-code/"
      }
    ],
    "relatedPaths": [
      "/blog/claude-code-projects"
    ]
  }
];
