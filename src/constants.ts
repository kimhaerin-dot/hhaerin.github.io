import { FeedItem } from "./types";

export const FEED_ITEMS: FeedItem[] = [
  {
    id: "intro",
    title: "소개합니다.",
    subtitle: "About Me",
    description: "이름: 김해린\n생년월일: 2005.10.31\n성별: 여\n대학 전공: 한성대학교 문학문화콘텐츠학과",
    images: [
      "white", // Placeholder for white background text
      "profile_details" // Placeholder for profile detail view
    ],
    tags: ["Profile", "Introduction"]
  },
  {
    id: "1",
    title: "책임감",
    subtitle: "Responsibility",
    description: "맡은 일은 끝까지 완수하는 끈기와 책임감을 가지고 있습니다. 어떤 상황에서도 결과물을 만들어내는 것이 저의 가장 큰 자산입니다.",
    images: ["white"],
    tags: ["Core Value", "Trust"]
  },
  {
    id: "2",
    title: "시간약속",
    subtitle: "Punctuality",
    description: "시간은 신뢰의 기본입니다. 모든 일정과 마감 기한을 철저히 준수하며 협업의 효율성을 높입니다.",
    images: ["white"],
    tags: ["Professionalism", "Habit"]
  },
  {
    id: "3",
    title: "미워할 수 없는 매력",
    subtitle: "Irresistible Charm",
    description: "긍정적인 에너지로 팀의 분위기를 밝게 만듭니다. 함께 일하고 싶은 동료가 되는 것이 저의 목표입니다.",
    images: ["white"],
    tags: ["Personality", "Teamwork"]
  },
  {
    id: "4",
    title: "소통능력",
    subtitle: "Communication",
    description: "상대방의 의도를 정확히 파악하고 명확하게 의견을 전달합니다. 갈등을 조율하고 최선의 결론을 도출하는 능력을 갖추고 있습니다.",
    images: ["white"],
    tags: ["Soft Skill", "Collaboration"]
  },
  {
    id: "synopsis",
    title: "시놉시스 1",
    subtitle: "Synopsis",
    description: "1989년, 경찰의 강압 수사로 살인 누명을 쓰고 20년을 복역한 남자. 어느 날 진범에게서 한 통의 전화가 걸려온다. \n\n힘과 권력에 약자들이 억압 받는 사회 현실을 고발하고 정의와 진실이 승리할 수 있음을 보여주고자 한다.",
    images: ["white", "story_detail"],
    tags: ["Creative", "Writing", "Movie"]
  }
];
