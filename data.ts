import { DashboardData } from './types';

export const dashboardData: DashboardData = {
  meta: {
    lastUpdated: new Date().toISOString().split('T')[0],
  },
  fandom: {
    profile: {
      displayName: "yujin_so (소유진)",
      tags: [
        { label: "Salim Mentor", tone: "brand" },
        { label: "Premium Curation", tone: "purple" }
      ],
      platform: "Instagram",
      handle: "@yujin_so",
      profileUrl: "https://www.instagram.com/yujin_so/",
      stats: {
        followers: "92.9만",
        avgViews: "10.8만"
      },
      commerceDNA: {
        subtitleLines: [
          "실패 없는 소비 보증",
          "프리미엄 큐레이션 몰"
        ],
        cards: [
          {
            label: "Identity",
            title: "따라 하고 싶은 살림 멘토",
            subtitle: "3040 워너비 슈퍼맘의 기준",
            tone: "brand",
            icon: "Crown"
          },
          {
            label: "Action",
            title: "신뢰 기반의 따라하기",
            subtitle: "질문하고 검증하며 구매",
            tone: "blue",
            icon: "MousePointerClick"
          },
          {
            label: "Trigger",
            title: "검증된 안목 (Curated Quality)",
            subtitle: "소유진이 골랐다면 믿는다",
            tone: "indigo",
            icon: "BadgeCheck"
          }
        ]
      }
    },
    kpi: {
      scaleAndReach: [
        {
          label: "총 팔로워 수",
          value: "92.9만 명",
          sub: "메가 인플루언서 등급",
          highlight: true,
          tone: "brand"
        },
        {
          label: "유효 타깃 팔로워",
          value: "54.6만 명",
          sub: "58.8% (허수 없는 알짜 모수)",
          tone: "slate"
        },
        {
          label: "평균 동영상 조회수",
          value: "10.8만 회",
          sub: "잠실 경기장 2개 규모",
          tone: "blue"
        },
        {
          label: "도달 효율",
          value: "11.6%",
          sub: "구독자 대비 조회 비율",
          tone: "indigo"
        },
        {
          label: "피드 좋아요",
          value: "3,541개",
          sub: "상위 9.24% (충성도)",
          highlight: true,
          tone: "pink"
        },
        {
          label: "참여율 (ER)",
          value: "0.26%",
          sub: "댓글/좋아요 비율 약 1.7%",
          tone: "slate"
        }
      ],
      audienceFit: {
        distribution: [
          { label: "여성", value: 50 },
          { label: "남성", value: 50 }
        ],
        mainTarget: {
          label: "18-24세 여성",
          percent: "18.9%"
        },
        coreSegment: {
          label: "남성 팔로워",
          percent: "50%"
        },
        notes: [
          "가구 구매 결정권자 타깃",
          "뷰티/식품/가전 전방위 영향력"
        ]
      },
      engagement: {
        avgLikes: {
          value: "3,541개",
          rate: "상위 9.24%"
        },
        avgComments: {
          value: "60개",
          rate: "1.7%"
        },
        commentLikeRatio: "약 1.7%",
        engagementRate: {
          value: "0.26%",
          note: "유사 그룹 평균 수준"
        },
        formatShare: {
          value: "숏폼 45% / 피드 54%",
          note: "이미지와 영상이 균형 잡힌 하이브리드 채널"
        }
      }
    },
    coreDefinition: {
      headline: "실패 없는 소비를 보증하는, 3040 여성들의 프리미엄 라이프스타일 큐레이션 몰",
      badgeLabel: "Trust Curation",
      description: "단순한 셀럽을 넘어 **‘따라 하고 싶은 살림 멘토’**로서 강력한 커머스 영향력을 보유하고 있습니다. 92.9만 명의 팔로워 중 58.8%(54.6만 명)가 유효 팔로워로 식별되며, 이는 공구 오픈 시 기본적인 매출 볼륨(Base Sales)이 보장되는 구조입니다. 휘발성이 강한 숏폼 트렌드 속에서도 **이미지 피드 좋아요 수가 상위 9.24%**에 달해, 인플루언서의 일상을 꼼꼼히 읽고 신뢰하는 ‘충성 고객(Loyal Customer)’이 견고하게 형성되어 있습니다."
    },
    evidence: [
      {
        title: "평균 피드 좋아요 수",
        subtitle: "3,541개 (상위 9.24%)",
        description: "커머스 전환(구매)은 단순 조회수가 아닌 **신뢰와 애정(Engagement)**에서 나옵니다. 동영상 시대에도 피드 반응도가 상위 10% 이내라는 것은, 팬들이 이 채널의 ‘정보’와 ‘텍스트’를 정독한다는 뜻입니다. 따라서 진정성 있는 스토리텔링 공구 진행 시 **높은 전환율(CVR)**을 기대할 수 있습니다.",
        icon: "Heart"
      },
      {
        title: "평균 동영상 조회 수",
        subtitle: "10.8만 회",
        description: "콘텐츠 하나가 발행될 때마다 **잠실 경기장 2개를 채우는 인원(10만 명)**이 상품을 시청합니다. 구독자 대비 조회 비율이 11.6%로 준수하여 팔로워 외의 잠재 고객에게도 도달할 수 있는 **알고리즘 확산력**을 갖췄음을 시사합니다. 신제품 런칭 시 초기 붐업(Boom-up)에 탁월합니다.",
        icon: "Eye"
      }
    ],
    deepDive: [
      {
        id: 1,
        icon: "Heart",
        title: "Engagement Quality",
        mainValue: "Top 9.24%",
        subValue: "Feed Likes",
        reasonTitle: "신뢰와 애정의 척도",
        reason: "숏폼 시대에도 피드 텍스트를 정독하는 팬덤은 단순 시청자가 아닌 **‘구매 의향 대기 수요’**입니다. 이는 상품의 상세 스펙이나 진정성 있는 후기를 담은 ‘긴 호흡의 설득’이 먹히는 채널임을 증명합니다.",
        insightTitle: "높은 전환율(CVR) 기대",
        insight: "단순 노출보다는 진정성 있는 스토리텔링이 통합니다. 팬덤이 인플루언서의 일상을 꼼꼼히 읽고 신뢰하므로, **고관여 상품**이나 **프리미엄 라인**의 설득 판매가 매우 유리한 구조입니다."
      },
      {
        id: 2,
        icon: "Target",
        title: "Target Purity",
        mainValue: "100%",
        subValue: "Korean Audience",
        reasonTitle: "구매 전환 가능 인구(TAM)",
        reason: "글로벌 팬덤이 섞인 타 메가 인플루언서와 달리, 모수가 100% 국내 소비자로 구성되어 있습니다. 이는 92만 명의 팔로워가 모두 **‘즉시 배송 가능한 잠재 고객’**이라는 뜻입니다.",
        insightTitle: "압도적인 ROAS 효율",
        insight: "해외 배송 이슈나 언어 장벽이 전혀 없어 마케팅 예산 누수가 없습니다. **이탈율 0%**의 최적 조건으로, 예산 대비 구매 전환 효율(ROAS)이 극도로 높게 나올 수밖에 없는 구조입니다."
      },
      {
        id: 3,
        icon: "TrendingUp",
        title: "Growth Potential",
        mainValue: "10.8만",
        subValue: "Avg Views",
        reasonTitle: "브랜드 확산의 광고판",
        reason: "콘텐츠 1개당 잠실 경기장 2개를 채우는 인원에게 도달합니다. 구독자 대비 조회 비율 11.6%는 팔로워를 넘어선 **알고리즘 확산력**을 의미하며, 신규 고객 유입의 통로가 됩니다.",
        insightTitle: "신규 트래픽 확보",
        insight: "기존 팬덤의 구매 전환뿐만 아니라, **신제품 런칭 시 초기 붐업(Boom-up)**과 대규모 트래픽 확보가 가능합니다. 브랜드 인지도를 단기간에 끌어올리는 'Billboard' 역할을 수행합니다."
      }
    ],
    funnel: {
      title: "The Trust Funnel",
      subtitle: "채널 고유의 구매 퍼널 모델링",
      steps: [
        {
          step: "01",
          title: "발견/인지 (Reels)",
          subtitle: "시각적 호기심 자극",
          description: "평균 10.8만 회 조회수를 통한 광범위한 노출. \"저 예쁜 주방용품은 뭐지?\"라는 **시각적 자극**으로 유입됩니다.",
          icon: "Eye"
        },
        {
          step: "02",
          title: "신뢰 검증 (Feed)",
          subtitle: "진정성 확인",
          description: "상위 9.24%의 좋아요를 기록하는 피드에서 구체적인 활용법과 멘트를 확인하며 \"소유진이 진짜 쓰는구나\"라고 **검증**합니다.",
          icon: "BadgeCheck"
        },
        {
          step: "03",
          title: "구매 동기화 (Social)",
          subtitle: "Social Proof",
          description: "\"언니 저도 샀어요!\" 같은 긍정적 댓글들을 보며 **팬덤의 동조 심리**가 작동해 구매 결정에 확신을 가집니다.",
          icon: "MessageCircle"
        },
        {
          step: "04",
          title: "구매 전환 (Action)",
          subtitle: "최종 링크 클릭",
          description: "이미 형성된 신뢰와 동조 심리를 바탕으로 망설임 없이 **최종 링크를 클릭**하여 구매로 전환됩니다.",
          icon: "MousePointerClick",
          highlight: true
        }
      ]
    },
    buyingTriggers: {
      relationship: {
        title: "Wannabe Super-mom",
        icon: "User",
        quote: "나와 똑같이 육아와 살림을 고민하는 언니",
        description: "팬들은 그녀를 ‘완벽해 보이지만 현실적인 고민을 공유하는’ 존재로 인식합니다. 단순한 동경을 넘어 **‘따라 하고 싶은 롤모델’**로서 강력한 유대감을 형성하고 있습니다.",
        tags: ["워너비 슈퍼맘", "현실적 롤모델", "살림 멘토"]
      },
      motivation: {
        title: "Curated Quality",
        icon: "CheckCircle2",
        points: [
          { label: "Trust-based", quote: "소유진이 골랐다면 믿을 수 있다" },
          { label: "Family-first", quote: "가족에게 먹이고 내 주방에 놓는 기준" }
        ],
        keyTrigger: "제품 스펙보다는 **‘그녀의 선택’** 자체가 가장 강력한 구매 보증수표가 됩니다."
      }
    },
    swot: {
      opportunity: {
        badge: "Opportunity Boosting",
        title: "High-End Curation",
        tone: "indigo",
        observation: {
          label: "Insight",
          text: "피드 좋아요 상위 9.24% & 고관여 타깃 집중",
          icon: "TrendingUp"
        },
        strategyName: {
          title: "시크릿 프리미엄 큐레이션",
          subtitle: "Closed Mall Strategy"
        },
        logic: "상위 10%에 달하는 고관여 팬덤은 휘발성 콘텐츠보다 깊이 있는 정보를 선호합니다. 이들의 구매력을 자극하기 위해서는 일반적인 공구보다는 **‘프라이빗한 혜택’**과 **‘희소성’**을 강조하는 접근이 필요합니다.",
        actionPlan: [
          {
            title: "프라이빗 공구 설계",
            description: "\"소여사 팔로워에게만 드리는 혜택\"이라는 명분으로 **고관여/고단가 상품(가전, 명품 주방용품)**을 매칭하여 객단가를 극대화합니다.",
            icon: "Lock"
          },
          {
            title: "이미지 피드 활용",
            description: "릴스보다 **이미지 피드(Carousel)**를 활용해 상품의 디테일과 진정성 있는 사용 후기를 깊이 있게 다루어 설득력을 높입니다.",
            icon: "Layers"
          }
        ],
        expectedEffect: "충성도 높은 팬덤의 구매욕을 자극하여 높은 객단가와 압도적인 **구매 전환율(CVR)** 달성 및 프리미엄 이미지 획득."
      },
      risk: {
        badge: "Risk Management",
        title: "Visual Imprinting",
        tone: "slate",
        observation: {
          label: "Weakness",
          text: "동영상 참여율(댓글) 상대적 저조",
          icon: "AlertTriangle"
        },
        strategyName: {
          title: "비주얼 임프린팅 전략",
          subtitle: "Passive Consumption Defense"
        },
        logic: "릴스 조회수는 높지만 댓글 참여가 적다는 것은 영상이 ‘정보성 눈요기’로 소비될 수 있음을 의미합니다. 참여 유도에 집착하기보다는 **‘확실한 인지’**를 통해 검색으로 유입시키는 우회 전략이 효과적입니다.",
        actionPlan: [
          {
            title: "Sizzle 연출 극대화",
            description: "댓글 유도 멘트보다는 제품의 사용 장면(Sizzle)을 극적으로 연출하여 **시각적 만족감**을 주고 뇌리에 잔상을 남깁니다.",
            icon: "Sparkles"
          },
          {
            title: "검색 키워드 명시",
            description: "영상 하단이나 고정 댓글에 '정확한 제품명'과 '네이버 검색 키워드'를 명시하여 **오가닉 검색(Search Volume)**을 유도합니다.",
            icon: "Search"
          }
        ],
        expectedEffect: "즉각적인 반응이 없더라도 포털 검색량 급증을 통해 실질적인 **오가닉 구매 전환**을 확보하고 매출을 견인."
      }
    },
    executiveSummary: [
      {
        title: "Market Dominance",
        subtitle: "타깃 적합성 & 시장 장악력",
        description: "국내 커머스 시장의 큰손인 **2040 여성 소비자**들에게 가장 확실하게 꽂히는 채널입니다. 92만 명 중 허수가 없는 유효 팔로워 54.6만 명은 브랜드가 즉시 활용 가능한 잠재 고객군이며, 소비자의 라이프스타일에 **‘따라 하고 싶은 기준’**을 제시합니다.",
        tag: "Dominance",
        tone: "brand",
        icon: "Crown"
      },
      {
        title: "Data Confidence",
        subtitle: "데이터 기반의 성공 확신",
        description: "**한국어 사용자 100%** 지표는 마케팅 예산 누수가 없음을, **피드 좋아요 상위 9%**는 팬덤의 높은 충성도와 구매 대기 수요를 증명합니다. 평균 10만 회 이상의 조회수는 신규 고객 확보를 위한 충분한 트래픽을 보장하는 안전한 투자처입니다.",
        tag: "Confidence",
        tone: "blue",
        icon: "BarChart3"
      },
      {
        title: "Winning Strategy",
        subtitle: "최종 기대 효과",
        description: "단기적으로는 폭발적인 트래픽과 매출 전환을, 장기적으로는 **‘소유진이 선택한 브랜드’**라는 프리미엄 이미지를 획득할 수 있습니다. 릴스로 알리고 피드로 설득하는 [시크릿 큐레이션] 전략 실행 시 역대급 **ROAS 달성**이 가능합니다.",
        tag: "Strategy",
        tone: "indigo",
        icon: "TrendingUp"
      }
    ]
  },
  content: {
    hero: {
      badgeLabel: "Macro Influencer",
      confidentialLabel: "Confidential Strategy",
      displayName: "yujin_so",
      mainTitle: "초개인화 브랜딩 전략 심층 보고서",
      subTitle: "감각적 실용주의 미식가를 위한 성장 로드맵",
      subjectBadge: {
        label: "Analysis Target",
        initials: "YS",
        handle: "@yujin_so"
      }
    },
    intro: {
      title: "전략 수립 배경 및 핵심 논리",
      paragraphs: [
        "본 보고서는 인플루언서 ‘yujin_so’의 독보적인 브랜드 아이덴티티 구축을 위해 데이터 기반의 심층 분석과 시장 트렌드를 결합했습니다. 현재 그녀는 **\"일상 속에서 맛과 건강, 편리함을 모두 추구하며 감각적인 푸드 라이프스타일을 제안하는 [감각적 실용주의 미식가]\"**로서의 강력한 정체성을 구축하고 있습니다.",
        "팬들이 열광하는 이유는 단순히 ‘맛있는 음식’이 아니라, **‘청결하고 현대적인 공간에서 펼쳐지는 효율적이고 건강한 요리 과정을 통해 얻는 진솔한 미식의 즐거움’**이라는 복합적인 경험에 있습니다. 따라서 본 전략은 이 필연적 연결고리를 통해 제안된 아이템과 콘텐츠가 성공할 수밖에 없는 이유를 논리적으로 입증합니다."
      ]
    },
    coreLogic: [
      {
        label: "Persona",
        title: "감각적 실용주의 (Sensible Pragmatism)",
        subTitle: "Core Persona Identity",
        description: "‘간편함’을 추구하는 실용주의와 ‘맛과 멋’을 놓치지 않는 미식가의 면모가 공존합니다. 에어프라이어를 돌리면서도 직접 키운 채소를 곁들이는 모습은 그녀를 단순한 요리 유튜버가 아닌 **‘따라 하고 싶은 워너비 라이프스타일’** 그 자체로 격상시킵니다.",
        tone: "brand",
        icon: "User"
      },
      {
        label: "Mechanism",
        title: "복합적 경험 (Complex Experience)",
        subTitle: "Feature - Expression - Response",
        description: "팬덤 반응의 핵심은 **Space(청결한 주방) → Process(효율적 요리) → Result(진솔한 미식)**의 흐름에 있습니다. 이 3단계가 유기적으로 결합될 때 팬들은 단순 시청을 넘어 깊은 감정적 동기화와 신뢰를 형성합니다.",
        tone: "blue",
        icon: "Layers"
      },
      {
        label: "Trigger",
        title: "신뢰의 4단계 (Trust Cycle)",
        subTitle: "Trigger - Action - Reward - Loyalty",
        description: "미니멀한 주방으로 **시각적 신뢰(Trigger)**를 주고, 현실적 솔루션으로 **행동(Action)**을 유도하며, 진솔한 표정으로 **감정적 보상(Reward)**을 제공합니다. 이 과정의 반복은 맹목적인 **충성도(Loyalty)**를 구축하는 승리 공식입니다.",
        tone: "indigo",
        icon: "Repeat"
      }
    ],
    requirements: {
      title: "Minimum Requirements",
      subtitle: "성공을 위한 최소 충족 요건 (Base)",
      items: [
        {
          id: 1,
          patternLabel: "Pattern 01",
          statusBadge: "Essential",
          statusTone: "brand",
          title: "Feature (소재의 일관성)",
          subTitle: "현대적이고 청결한 주방 배경",
          description: "모든 콘텐츠는 **깔끔하게 정돈된 미니멀한 주방**을 배경으로 해야 합니다. 분석된 23건 중 14건에서 이러한 특징이 관찰되었으며, 이는 팬들에게 시각적 신뢰감과 안정감을 주는 브랜드의 핵심 무대 장치입니다.",
          footer: {
            type: "quotes",
            items: [
              "팬들에게 시각적 신뢰감 부여",
              "브랜드의 핵심 무대 장치 역할"
            ]
          },
          icon: "LayoutTemplate",
          iconTone: "slate"
        },
        {
          id: 2,
          patternLabel: "Pattern 02",
          statusBadge: "Critical",
          statusTone: "blue",
          title: "Expression (표현의 진정성)",
          subTitle: "효율성과 즐거움의 강조",
          description: "요리 과정의 효율성을 보여주면서도 완성된 음식에 대한 **진솔하고 긍정적인 감탄**이 필수적입니다. \"두근두근\", \"맛있어져라\" 같은 감정 표현은 팬들의 감정적 동기화를 이끌어내는 핵심 트리거로 작용합니다.",
          footer: {
            type: "checks",
            items: [
              "요리 과정의 효율성 강조",
              "진솔하고 긍정적인 감탄 필수",
              "감정적 동기화 유도"
            ]
          },
          icon: "Smile",
          iconTone: "blue"
        },
        {
          id: 3,
          patternLabel: "Pattern 03",
          statusBadge: "Required",
          statusTone: "indigo",
          title: "Response (결과의 효용성)",
          subTitle: "미식 생활에 대한 영감 제공",
          description: "최종 결과물은 팬들이 **쉽고 즐겁게 따라 할 수 있는 영감**을 제공해야 합니다. 이는 실용적인 정보와 감성적 만족감을 동시에 충족시키는 가치이며, 팬들이 콘텐츠를 소비하는 궁극적인 목적입니다.",
          footer: {
            type: "quotes",
            items: [
              "쉽고 즐거운 따라하기 유도",
              "실용 정보와 감성 만족의 조화"
            ]
          },
          icon: "Lightbulb",
          iconTone: "yellow"
        }
      ]
    },
    strategies: [
      {
        id: 1,
        title: "초간편 미식 (Effortless Gourmet)",
        subTitle: "10분 완성 헬시 다이닝",
        icon: "Zap",
        tone: "brand",
        keyItem: "프리미엄 간편 조리 세트 (HMR/밀키트)",
        context: "‘yujin_so’는 바쁜 스케줄 속에서도 미식가로서의 품격과 건강을 놓치고 싶지 않은 딜레마를 가집니다. 직접 요리할 시간은 부족하지만 인스턴트는 거부하는 그녀에게, **‘시간의 제약’과 ‘품질’ 사이의 간극**을 메워줄 솔루션이 절실합니다.",
        dataProof: "데이터 분석 결과 23건 중 13건에서 에어프라이어, 만능 소스 등 간편 조리 도구 활용이 나타났습니다. 팬들은 그녀의 **‘효율적인 요리 방식’**에 열광하며, 동시에 고급 식재료를 사용하는 모습에서 그녀의 높은 품질 기준을 신뢰하고 있습니다.",
        spec: "신선하게 손질된 고품질 식재료와 **10분 안에 완성 가능한 최적화된 레시피**가 핵심입니다. 이는 그녀가 추구하는 건강과 맛을 희생하지 않으면서도 팬들이 원하는 ‘간편함과 효율성’을 완벽하게 충족시키는 유일한 솔루션입니다.",
        guide: {
          concept: "퇴근 후 지친 나를 위한 10분 만의 셀프 만찬",
          intro: "깔끔한 주방에서 \"오늘 바빴지만 근사한 저녁은 먹고 싶을 때\"라며 운을 뗍니다.",
          action: "손질된 재료의 신선함을 클로즈업하고, 전자레인지나 인덕션으로 **‘뚝딱’** 요리하는 효율적인 과정을 보여줍니다.",
          ment: "\"정말 10분 만에 만들었는데, 이 맛 실화예요?\"라며 진심 어린 만족감을 표현합니다."
        }
      },
      {
        id: 2,
        title: "퍼포먼스 키친 (Performance Kitchen)",
        subTitle: "운동 효과를 극대화하는 영양 설계",
        icon: "TrendingUp",
        tone: "blue",
        keyItem: "간편 섭취 고단백 영양 보충제 (RTD)",
        context: "운동과 자기관리에 철저한 그녀에게는 바쁜 스케줄 중간에 빠르게 영양을 보충해야 하는 ‘결정적 순간’이 존재합니다. 매번 조리할 수 없는 상황에서 **‘간편함’과 ‘영양’을 동시에 충족**시킬 현실적인 대안이 필요합니다.",
        dataProof: "팬들은 그녀의 ‘건강 지향적 식단’(13건)과 ‘네일아트/자기관리’ 모습에 깊은 신뢰를 보냅니다. \"맛있게 먹고 날씬할 수도\"라는 메시지는 **효율적인 영양 섭취 방법**에 대한 팬들의 강력한 잠재적 니즈를 대변합니다.",
        spec: "별도 조리 없이 즉각 섭취 가능한 **개별 포장 형태**와 **운동 회복에 최적화된 고단백 성분**이 필수입니다. 이는 그녀의 건강한 라이프스타일과 실용주의적 성향이 결합된 최적의 아이템입니다.",
        guide: {
          concept: "운동 끝! 3초면 충분해. 지친 근육을 깨우는 회복 루틴",
          intro: "가벼운 운동복 차림으로 등장해 \"운동만큼 중요한 건 지금부터예요\"라고 강조합니다.",
          action: "냉장고에서 RTD 음료를 꺼내 성분을 짧게 보여주고, 요리할 힘도 없을 때의 **최고의 솔루션**임을 어필합니다.",
          ment: "\"아, 이제야 살 것 같다! 이렇게 챙겨줘야 내일 또 운동하죠.\"라며 긍정적 에너지를 전합니다."
        }
      },
      {
        id: 3,
        title: "죄책감 없는 만족감 (Guilt-Free)",
        subTitle: "포만감을 채우는 다이어트 간식학",
        icon: "Smile",
        tone: "pink",
        keyItem: "고단백 저당분 디저트류",
        context: "미식가로서 디저트의 즐거움을 포기할 수 없는 그녀는 다이어트 중 내적 갈등을 겪습니다. **‘맛’과 ‘건강’ 사이의 타협점**을 찾아야 하는 이 딜레마는 다이어트를 하는 모든 팬들의 공통된 고민입니다.",
        dataProof: "데이터상 14건의 영상에서 음식에 대한 긍정적 감정이 표현되었습니다. 팬들은 그녀가 디저트를 먹을 때 느끼는 **순수한 행복감**에 공감하며, 그녀가 이 딜레마를 어떻게 ‘즐겁게’ 해결하는지 보고 싶어 합니다.",
        spec: "일반 디저트와 유사한 맛과 식감을 가지면서도 **높은 단백질과 낮은 당 함량**을 갖춰야 합니다. 이는 ‘미식의 즐거움’을 유지하면서 ‘자기 관리’ 목표를 달성하게 해주는 이상적인 스펙입니다.",
        guide: {
          concept: "밤 10시, 죄책감 없이 즐기는 나만의 비밀 간식",
          intro: "편안한 홈웨어로 \"이 시간만 되면 왜 이렇게 달달한 게 당길까요?\"라며 공감을 유도합니다.",
          action: "예쁜 접시에 디저트를 감각적으로 플레이팅하고, 한 입 먹은 후 **세상 행복한 표정**을 짓습니다.",
          ment: "\"와, 이게 다이어트 간식이라고요? 참지 말고 똑똑하게 즐기세요!\"라고 마무리합니다."
        }
      }
    ],
    conclusion: {
      title: "Comprehensive Identity",
      subtitle: "yujin_so의 대체 불가능한 아이덴티티",
      identityBanner: {
        quote: "일상의 효율성과 미식의 품격을 완벽하게 조화시키는",
        tagline: "신뢰 기반의 라이프스타일 큐레이터"
      },
      personaCards: [
        {
          title: "실용주의 (Pragmatism)",
          subtitle: "Effortless & Smart",
          description: "에어프라이어와 만능 소스를 활용해 바쁜 일상 속에서도 효율을 극대화합니다. 이는 대중에게 **'나도 할 수 있다'**는 효능감과 현실적인 솔루션을 제공합니다.",
          tone: "blue",
          icon: "Zap"
        },
        {
          title: "미식가 (Gourmet)",
          subtitle: "Taste & Style",
          description: "직접 키운 채소를 곁들이고 고급 식기에 플레이팅하며 맛과 멋을 포기하지 않습니다. 이는 단순한 요리를 넘어 **'따라 하고 싶은 워너비 라이프스타일'**을 완성합니다.",
          tone: "brand",
          icon: "Crown"
        }
      ],
      winningFormula: [
        {
          label: "Trigger",
          title: "시각적 신뢰 (Visual Trust)",
          description: "미니멀하고 청결하게 관리된 주방을 통해 무의식적인 신뢰를 형성하고 심리적 허들을 낮춥니다.",
          tag: "Trust",
          tone: "slate"
        },
        {
          label: "Action",
          title: "현실적 대안 (Real Solution)",
          description: "비현실적인 레시피가 아닌 만능 소스 같은 현실적 도구로 행동을 유도하고 효능감을 부여합니다.",
          tag: "Behavior",
          tone: "blue"
        },
        {
          label: "Reward",
          title: "감정적 보상 (Emotional Reward)",
          description: "진솔하고 행복한 표정을 통해 확실한 감정적 보상을 약속하고 자발적 추종을 이끌어냅니다.",
          tag: "Emotion",
          tone: "pink"
        }
      ],
      strategicVision: {
        label: "Strategic Outlook",
        headline: "프리미엄 실용주의 (Premium Pragmatism) 선점",
        description: "다각화된 전략 실행 시, 그녀는 푸드 인플루언서 시장 내에서 독보적인 카테고리를 선점하게 될 것입니다. ‘빠르고 간편한 한 끼’부터 ‘목적 지향적 영양 설계’, ‘죄책감 없는 미식’까지 넓은 스펙트럼의 수요를 흡수하여, 하나의 콘텐츠로 다양한 잠재고객을 설득하는 **대체 불가능한 브랜드 파워**를 갖게 될 것으로 확신합니다."
      }
    }
  }
};