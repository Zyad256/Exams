import { examData as advWebExams } from "./questions";
import { examData as cvExams } from "./cv-questions";
import { examData as iotExams } from "./iot-questions";
import { examData as mlExams } from "./ml-questions";

export const subjects = {
  advWeb: {
    id: "advWeb",
    title: "Advanced Programming Web",
    subtitle:
      "Designing Data-Intensive Applications Syllabus (Chapters 1 to 5)",
    icon: "fa-code",
    exams: advWebExams,
    chapters: [
      {
        id: 1,
        badge: "Ch 1",
        title: "Reliable, Scalable, & Maintainable Applications",
        preview:
          "Hardware/software faults, load parameters, and latency vs. throughput trade-offs.",
        meta: "Reliability, scalability, maintainability",
        sections: [
          {
            heading: "Reliability",
            body: "The system should continue to work correctly even when things go wrong. <strong>Faults</strong> (one component deviating) vs <strong>Failures</strong> (whole system stops).",
            bullets: [
              "<strong>Hardware faults:</strong> Hard disks crashing, power outages → handle with redundancy (RAID, backup)",
              "<strong>Software faults:</strong> Bugs causing crashes (e.g., Linux leap second bug)",
              "<strong>Human errors:</strong> Leading cause of outages → minimize with well-designed APIs, sandbox environments, automated testing, and quick rollback",
            ],
          },
          {
            heading: "Scalability",
            body: "Dealing with growth. Use <strong>Load Parameters</strong> (requests/sec, read/write ratio). Measure with <strong>Percentiles</strong> — median (p50) and tail latencies (p99) matter more than averages.",
          },
          {
            heading: "Maintainability",
            bullets: [
              "<strong>Operability:</strong> Easy routine tasks, good monitoring & automation",
              "<strong>Simplicity:</strong> Use abstraction to hide complexity",
              "<strong>Evolvability:</strong> Easy to adapt to changing requirements",
            ],
          },
        ],
      },
      {
        id: 2,
        badge: "Ch 2",
        title: "Data Models & Query Languages",
        preview:
          "Comparing Relational, Document, NoSQL, and Graph schemas for complex relationships.",
        meta: "SQL, document models, graph models, query languages",
        sections: [
          {
            heading: "4 Layers of Abstraction",
            body: "Application Developer → Storage Representation → Database Software → Hardware Engineers",
          },
          {
            heading: "Relational (SQL)",
            body: "Data in tables/tuples. <strong>Impedance Mismatch:</strong> disconnect between OOP code and relational tables. ORMs reduce but can't eliminate this.",
          },
          {
            heading: "Document (NoSQL)",
            body: "<strong>Schema-on-Read</strong> (implicit, like dynamic typing) vs <strong>Schema-on-Write</strong> (explicit, like static typing). Good data locality but poor join support.",
          },
          {
            heading: "Graph Model",
            body: "For highly interconnected data. <strong>Property Graph</strong> (Neo4j, Cypher), <strong>Triple-Store</strong> (SPARQL), <strong>Datalog</strong>.",
          },
          {
            heading: "Declarative vs Imperative",
            body: "Declarative (SQL/CSS) specifies <em>what</em>, not <em>how</em>. Benefits: concise, hides implementation, enables parallel execution.",
          },
        ],
      },
      {
        id: 3,
        badge: "Ch 3",
        title: "Storage & Retrieval",
        preview:
          "Diving into SSTables, Log-Structured Merge Trees, memtables, and Bloom filters.",
        meta: "Indexes, LSM trees, B-trees, OLTP vs OLAP",
        sections: [
          {
            heading: "Append-Only Log",
            body: "Write O(1) — fast sequential append. Read O(n) — must scan entire file. Indexes speed up reads but slow writes.",
          },
          {
            heading: "Hash Indexes (Bitcask)",
            body: "In-memory hash map → byte offsets on disk. Uses <strong>compaction & merging</strong>, tombstone deletes, single writer thread. Limitation: all keys must fit in RAM, no range queries.",
          },
          {
            heading: "SSTables & LSM-Trees",
            body: "Segments sorted by key. <strong>Memtable</strong> (Red-Black/AVL) → flush to SSTable → WAL for crash recovery. Bloom filters prevent wasteful disk reads. Compaction: size-tiered vs leveled.",
          },
          {
            heading: "B-Trees",
            body: "Fixed-size pages (4KB), branching factor ~hundreds. Page splitting keeps tree balanced at O(log n). WAL (Redo Log) for crash resilience. Latches for concurrency.",
          },
          {
            heading: "OLTP vs OLAP",
            body: "<strong>OLTP:</strong> User-facing, small record lookups, disk seek bottleneck. <strong>OLAP:</strong> Analyst queries, scan millions of records, disk bandwidth bottleneck. Data warehouses use ETL and column-oriented storage.",
          },
        ],
      },
      {
        id: 4,
        badge: "Ch 4",
        title: "Encoding & Evolution",
        preview:
          "Data evolution systems, schema compatibility, JSON, XML, Protobuf, Thrift, and Avro.",
        meta: "Serialization, compatibility, schemas, services",
        sections: [
          {
            heading: "Compatibility",
            body: "<strong>Backward:</strong> Newer code reads older data (easy). <strong>Forward:</strong> Older code reads newer data (tricky — must ignore unknowns). Both essential for rolling upgrades.",
          },
          {
            heading: "Encoding Formats",
            bullets: [
              "<strong>Language-specific</strong> (Java Serializable, pickle): Convenient but security risk (RCE), single language lock-in",
              "<strong>JSON/XML:</strong> Human-readable but number ambiguity, no binary support, Base64 adds 33% size",
              "<strong>Protobuf/Thrift:</strong> Use field tags (numbers), compact binary, strong schema evolution",
              "<strong>Avro:</strong> No tags — matches by field name. Most compact. Writer/Reader schema resolution. Great for Hadoop/Kafka",
            ],
          },
          {
            heading: "Dataflow Modes",
            bullets: [
              "<strong>Through Databases:</strong> Data outlives code; forward compat critical",
              '<strong>Through Services (REST/RPC):</strong> RPC\'s "Location Transparency" is a flawed illusion',
              "<strong>Message Passing:</strong> Brokers (Kafka, RabbitMQ) buffer, redeliver, and fan-out",
            ],
          },
        ],
      },
      {
        id: 5,
        badge: "Ch 5",
        title: "Replication & Distributed Nodes",
        preview:
          "Single-leader, multi-leader, leaderless systems, quorums, and replication lag.",
        meta: "Replication, consistency, failover, quorums",
        sections: [
          {
            heading: "Single-Leader",
            body: "One leader accepts writes, followers consume replication log. Sync (guaranteed up-to-date, blocks on crash) vs Async (leader never blocks, data loss risk).",
          },
          {
            heading: "Failover Pitfalls",
            bullets: [
              "<strong>Split Brain:</strong> Two nodes both believe they're leader → data corruption",
              "Discarding un-replicated writes violates durability",
              "Short timeouts cause unnecessary failovers",
            ],
          },
          {
            heading: "Replication Lag Anomalies",
            bullets: [
              "<strong>Read-after-write:</strong> User sees own writes vanish → read own profile from leader",
              "<strong>Monotonic reads:</strong> Time goes backward → pin user to same replica",
              "<strong>Consistent prefix:</strong> Effect before cause → route causal writes to same partition",
            ],
          },
          {
            heading: "Multi-Leader & Leaderless",
            body: "<strong>Multi-leader:</strong> Multiple DCs, conflict resolution (LWW, merge, custom). <strong>Leaderless (Dynamo):</strong> Any node accepts writes, quorum w+r>n, sloppy quorums, hinted handoff, version vectors for concurrency.",
          },
        ],
      },
    ],
    examConfigs: [
      {
        id: 0,
        badge: "Chapters 1-3",
        title: "Exam 1: LSM Trees, NoSQL, & DB Concepts",
        desc: "Comprehensive test covering read/write amplification, NoSQL models, SSTable immutability...",
        color: "badge-cyan",
        btnColor: "btn-primary",
      },
      {
        id: 1,
        badge: "Chapter 5",
        title: "Exam 2: Replication & Distributed Systems",
        desc: "Tests your knowledge of single-leader, multi-leader, and leaderless replication protocols...",
        color: "badge-purple",
        btnColor: "btn-primary",
      },
      {
        id: 2,
        badge: "Chapters 1-5",
        title: "Exam 3: Comparisons & Deep Analysis",
        desc: "Comparison tables, follow-up MCQs, and open-ended essay questions...",
        color: "badge-orange",
        btnColor: "btn-orange",
      },
      {
        id: 3,
        badge: "Chapters 1-5",
        title: "Exam 4: Comprehensive MCQ Review",
        desc: "40 fresh MCQ questions spanning all 5 chapters — tombstones, CRDTs, star schemas, actor models, and more...",
        color: "badge-green",
        btnColor: "btn-primary",
      },
    ],
  },
  cv: {
    id: "cv",
    title: "Computer Vision",
    subtitle:
      "Image processing, edge/corner detection, and feature descriptors",
    icon: "fa-eye",
    exams: cvExams,
    chapters: [
      {
        id: 0,
        badge: "Lec 0",
        title: "Introduction to Computer Vision",
        preview: "Course overview and introduction",
        meta: "Introduction",
        sections: [
          {
            heading: "Lecture Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1C_syKpKE-K3aRi4h42UaGXz9pZN_UoqD/preview",
          },
          {
            heading: "Lecture Presentation",
            iframeUrl:
              "https://docs.google.com/presentation/d/1xHP9fOj8d8HjQI0TO_KVoLyO6WddKdQE/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 1,
        badge: "Lec 1",
        title: "Image Processing Revision",
        preview: "Basic image processing, point operations, convolutions",
        meta: "Image Processing",
        sections: [
          {
            heading: "Lecture Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1KDCde7bP_KrxfBATRnH1QcHq33zzH3tk/preview",
          },
          {
            heading: "Part 1",
            iframeUrl:
              "https://docs.google.com/presentation/d/1kkBqXsKOnE1htGHP5pnwB63L8VnBQUF6/embed?start=false&loop=false&delayms=3000",
          },
          {
            heading: "Part 2",
            iframeUrl:
              "https://docs.google.com/presentation/d/1HyEjGc8dL7NXe8djHCvRXCh6usR1mC_s/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 2,
        badge: "Lec 2",
        title: "Human Vision System (HVS)",
        preview: "Anatomy of the eye, perception, theories of color vision",
        meta: "HVS",
        sections: [
          {
            heading: "Lecture Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1w436K3NHYbDgLnXOA1ri0ElnXrNFlSGD/preview",
          },
          {
            heading: "Human Vision System",
            iframeUrl:
              "https://docs.google.com/presentation/d/1sgh1s8KTw1-_n3fUtlezpPs-6uYe31UY/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 3,
        badge: "Lec 3",
        title: "Image Properties & Representation",
        preview:
          "Topological properties, Histograms, Pyramids, Data Structures",
        meta: "Properties & Representation",
        sections: [
          {
            heading: "Part 1 Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1q7AanAdN-OXRcvO5cVmgoxE9bbO8orjm/preview",
          },
          {
            heading: "Part 2 Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1App-_sFNLhJj9YZ11XqlkI9m65OpNAEo/preview",
          },
          {
            heading: "Part 1",
            iframeUrl:
              "https://docs.google.com/presentation/d/1gYW3L6y7UE4evmNas4YZHn9nnibn_D2c/embed?start=false&loop=false&delayms=3000",
          },
          {
            heading: "Part 2",
            iframeUrl:
              "https://docs.google.com/presentation/d/1sxSllHSnIc04qkM5P0Lg5JgEjutAQljY/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 4,
        badge: "Lec 4",
        title: "Local Pre-processing & Edge Detection",
        preview: "Smoothing, Edges, Solved Problems",
        meta: "Edges",
        sections: [
          {
            heading: "Theory Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1QXhqIXpi4VifZe55ilhKLA4-UmD_P4se/preview",
          },
          {
            heading: "Solved Problems Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1efr_vYAofsW2cXVoPUxEiT7O44q3BE6g/preview",
          },
          {
            heading: "Theory",
            iframeUrl:
              "https://docs.google.com/presentation/d/1XW2qw6S_Ds5IjpqmowBi5FacOTyRy9VJ/embed?start=false&loop=false&delayms=3000",
          },
          {
            heading: "Solved Problems",
            iframeUrl:
              "https://docs.google.com/presentation/d/1eZhTu-Vhc_aR7FO2JXIgQg1CqcRaXMwV/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 5,
        badge: "Lec 5",
        title: "Hough Transform",
        preview: "Hough space, detecting shapes",
        meta: "Hough Transform",
        sections: [
          {
            heading: "Lecture Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1_V396BchpnyrKWx6WfOkT3k5f6fAodJF/preview",
          },
          {
            heading: "Hough Transform",
            iframeUrl:
              "https://docs.google.com/presentation/d/1NqFV1wcmdyxeFOs9DUdlH5TKY1ip8fuh/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 6,
        badge: "Lec 6",
        title: "Corner Detection",
        preview: "Harris corner detector mechanics",
        meta: "Corners",
        sections: [
          {
            heading: "Lecture Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1eU_FdbIkIfDBoHO-si2zFi0LVCEuQF7M/preview",
          },
          {
            heading: "Corner Detection Part 1 Audio (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1gJcT7QioQSakOJcU3eBusELefW2yL8aA/preview",
          },
          {
            heading: "Corner Detection Part 2 Audio (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1fpzuIQttEI3Ln7xgZsaMwQQXIJqeJmmu/preview",
          },
          {
            heading: "Corner Detection",
            iframeUrl:
              "https://docs.google.com/presentation/d/1yl43L6tmVl_b1CwLuQ3qWvQ_AOWRAEye/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 7,
        badge: "Lec 7",
        title: "Interest Points and Blobs",
        preview: "Blobs detection",
        meta: "Blobs",
        sections: [
          {
            heading: "Lecture Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1O73FRP1Tq9CXKz3laKc13arMVGfGafT-/preview",
          },
          {
            heading: "Interest Points & Blobs",
            iframeUrl:
              "https://docs.google.com/presentation/d/1BYxhCxfuzK7yls68aQSzjFOWXp1NaLGk/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
      {
        id: 8,
        badge: "Lec 8",
        title: "SIFT Detector and Descriptor",
        preview: "Scale-Invariant Feature Transform",
        meta: "SIFT",
        sections: [
          {
            heading: "Lecture Audio Recording (MP4)",
            iframeUrl:
              "https://drive.google.com/file/d/1tiG_yN5TZNouFMS-MAIiVZw6G9s3zRHV/preview",
          },
          {
            heading: "SIFT",
            iframeUrl:
              "https://docs.google.com/presentation/d/15YyNd9p9xOz34smhhRtIXjz1RkNe9MM_/embed?start=false&loop=false&delayms=3000",
          },
        ],
      },
    ],
    examConfigs: [
      {
        id: 0,
        badge: "Chapters 0-3",
        title: "Exam 1: Foundations & Pixels",
        desc: "HVS, histograms, basic transformations, and spatial convolution principles...",
        color: "badge-cyan",
        btnColor: "btn-primary",
      },
      {
        id: 1,
        badge: "Chapters 4-5",
        title: "Exam 2: Edges & Hough Transform",
        desc: "Sobel, Canny edge tracking, non-maximum suppression, and Hough space sinusoids...",
        color: "badge-purple",
        btnColor: "btn-primary",
      },
      {
        id: 2,
        badge: "Chapters 6-8",
        title: "Exam 3: Corners, Blobs, & SIFT",
        desc: "Harris corner mechanics, DoG pyramids, and SIFT descriptor logic...",
        color: "badge-orange",
        btnColor: "btn-orange",
      },
    ],
  },
  iot: {
    id: "iot",
    title: "Internet of Things",
    subtitle: "Embedded systems, sensor networks, wireless protocols, and standards",
    icon: "fa-network-wired",
    exams: iotExams,
    chapters: [
      {
        id: 1,
        badge: "Lec 1",
        title: "Introduction to IoT",
        preview: "What is IoT, basic architectural layers, and system characteristics.",
        meta: "Introduction",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/1___7YDs1111nI1ybwZ-hr9dsXtRD87_3/embed?start=false&loop=false&delayms=3000"
          }
        ]
      },
      {
        id: 2,
        badge: "Lec 2",
        title: "Connecting Things: Physical & Link Layers (Part 1)",
        preview: "Basic electronics, transducer concepts, sensors, and signal formats.",
        meta: "Electronics & Physical",
        sections: [
          {
            heading: "Lecture Slide (PDF)",
            iframeUrl: "https://drive.google.com/file/d/1dm9Zcjr0qFI7Aueo5kIilOYYLn_X-43t/preview"
          }
        ]
      },
      {
        id: 3,
        badge: "Lec 3",
        title: "Connecting Things: Physical & Link Layers (Part 2)",
        preview: "Antenna fundamentals, gain, bandwidth, receivers, and the superheterodyne model.",
        meta: "Antennas & Receivers",
        sections: [
          {
            heading: "Lecture Slide (PDF)",
            iframeUrl: "https://drive.google.com/file/d/1yWpTicri1DPDvkigmajwm7F61HM57KKy/preview"
          }
        ]
      },
      {
        id: 4,
        badge: "Lec 4",
        title: "Connecting Things & Zigbee Protocol",
        preview: "Zigbee standards, coordinator startup, mesh topology, and router algorithms.",
        meta: "Zigbee",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/1fJNtg4X30TZy-YPiM95gZNGK2MMAJW-X/embed?start=false&loop=false&delayms=3000"
          }
        ]
      },
      {
        id: 5,
        badge: "Lec 5",
        title: "Bluetooth Technology (Part 1)",
        preview: "Bluetooth classic protocols, frequency hopping, and master/slave clock offsets.",
        meta: "Bluetooth Classic",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/1QXRqPoxEQ1XB8GrcmUPci_EcWvy6UpSe/embed?start=false&loop=false&delayms=3000"
          }
        ]
      },
      {
        id: 6,
        badge: "Lec 6",
        title: "Bluetooth Technology (Part 2)",
        preview: "Bluetooth low power modes, sniff, hold, park, and security mechanisms.",
        meta: "Bluetooth Low Power",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/1BplunrQgo_6y0m6cROkbFiKgi5I2OKZZ/embed?start=false&loop=false&delayms=3000"
          }
        ]
      },
      {
        id: 7,
        badge: "Lec 7",
        title: "Wi-Fi Technology",
        preview: "Wi-Fi standards, licensed/unlicensed bands, and power configurations.",
        meta: "Wi-Fi",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/1CaJTXQkOpDEEsq8jircNmVr8HFJn6SXg/embed?start=false&loop=false&delayms=3000"
          }
        ]
      },
      {
        id: 8,
        badge: "Lec 8",
        title: "MAC Protocols",
        preview: "Media Access Control mechanisms, channel allocations, and conflict avoidance.",
        meta: "MAC",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/1g3ZZ1-mwH8UYdj1qJeWTHQIQBDRb4NH2/embed?start=false&loop=false&delayms=3000"
          }
        ]
      },
      {
        id: 9,
        badge: "Lec 9",
        title: "Cellular Systems & Licensed LPWANs",
        preview: "Cellular data integration for IoT nodes, covering LTE-M and NB-IoT carrier networks.",
        meta: "Cellular & LPWAN",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/182qaRf9ZN8dlHNsdCi_MqCzXBTL0ZoeR/embed?start=false&loop=false&delayms=3000"
          }
        ]
      },
      {
        id: 10,
        badge: "Lec 10",
        title: "Visible Light Communication & LoRaWAN",
        preview: "Optical transmission via Visible Light Comms (VLC) and unlicensed sub-GHz LPWAN (LoRaWAN).",
        meta: "VLC & LoRaWAN",
        sections: [
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://docs.google.com/presentation/d/1BTeCz-UHtv_un7r_Mso4JH4yH1h-hluF/embed?start=false&loop=false&delayms=3000"
          }
        ]
      }
    ],
    examConfigs: [
      {
        id: 0,
        badge: "Lectures 1-3",
        title: "Exam 1: Electronic Communication Systems",
        desc: "Tests antenna gain, bandwidth, superheterodyne receivers, and preselector band filters...",
        color: "badge-cyan",
        btnColor: "btn-primary"
      },
      {
        id: 1,
        badge: "Lecture 4 & Sheets",
        title: "Exam 2: IoT Systems & Zigbee Nodes",
        desc: "Covers licensed/unlicensed bands, LoRaWAN, VLC, and Zigbee network starting protocols...",
        color: "badge-purple",
        btnColor: "btn-primary"
      },
      {
        id: 2,
        badge: "Lectures 5-10",
        title: "Exam 3: Bluetooth & Wireless Coexistence",
        desc: "Comprehensive review of Wi-Fi vs BLE vs Zigbee, Bluetooth BR vs LE, and Bluetooth attacks...",
        color: "badge-orange",
        btnColor: "btn-orange"
      }
    ]
  },
  ml: {
    id: "ml",
    title: "Machine Learning",
    subtitle:
      "Supervised, unsupervised, reinforcement, and generative models",
    icon: "fa-brain",
    exams: mlExams,
    chapters: [
      {
        id: 1,
        badge: "Lec 1",
        title: "Introduction to Machine Learning",
        preview: "Course outline, learning paradigms (supervised, unsupervised, reinforcement, generative), and ML vs. stats/AI.",
        meta: "AI, ML, paradigms, supervised, unsupervised, reinforcement, generative AI",
        sections: [
          {
            heading: "Lecture Video Recording",
            // iframeUrl: "https://drive.google.com/file/d/114lBFF8wV8zt6usnVYGTlrwjngi7kjrR/preview"
            iframeUrl: "https://drive.google.com/file/d/17yR0oBd2c3AqGHo21xWLjW47ydptdwN-/preview"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/1kAnHuZ-XVzzONW7f9bKnsJnCqpAk-QmZ/preview"
          }
        ]
      },
      {
        id: 2,
        badge: "Lec 2",
        title: "Linear Regression & Cost Function",
        preview: "Univariate linear regression, weights and biases parameters, and cost functions (absolute vs. squared errors, MSE).",
        meta: "Linear regression, parameters, weights, bias, MSE, cost function",
        sections: [
          {
            heading: "NotebookLM Video Overview",
            externalUrl: "https://notebooklm.google.com/notebook/747d5da2-a22b-4d57-bf71-a93a20256115/artifact/d54def34-625e-45aa-b161-a8433d8fc1d2?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
            externalIcon: "fa-play",
            externalLabel: "Watch on NotebookLM"
          },
          {
            heading: "Supplementary: Linear Regression (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/PaFPbb66DxQ"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/1sMQJxzt3rS3jfHRgofBl5USe3Vk64Crp/preview"
          }
        ]
      },
      {
        id: 3,
        badge: "Lec 3",
        title: "Gradient Descent Optimization",
        preview: "Gradient descent optimization mechanics, learning rate tuning, batch gradient descent, and epochs.",
        meta: "Gradient descent, learning rate, updates, batch gradient descent, convergence",
        sections: [
          {
            heading: "NotebookLM Video Overview",
            externalUrl: "https://notebooklm.google.com/notebook/747d5da2-a22b-4d57-bf71-a93a20256115/artifact/4ee7515a-8f56-41e8-91cf-1a41f3fb4e81?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
            externalIcon: "fa-play",
            externalLabel: "Watch on NotebookLM"
          },
          {
            heading: "Supplementary: Gradient Descent (3Blue1Brown)",
            iframeUrl: "https://www.youtube.com/embed/IHZwWFHWa-w"
          },
          {
            heading: "Supplementary: Gradient Descent Explained (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/sDv4f4s2SB8"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/1XRv-h3gkjgWr3wuMjR113ccygGFAwcRX/preview"
          }
        ]
      },
      {
        id: 4,
        badge: "Lec 4",
        title: "Multiple Features & Feature Engineering",
        preview: "Multivariate regression, feature scaling (mean normalization, max scale), feature engineering, and polynomial regression.",
        meta: "Multiple features, feature scaling, mean normalization, polynomial regression",
        sections: [
           {
            heading: "NotebookLM Video Overview",
            externalUrl: "https://notebooklm.google.com/notebook/747d5da2-a22b-4d57-bf71-a93a20256115/artifact/2c921e7c-4ffd-4e10-a680-08892909fa08?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_2&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_2_",
            externalIcon: "fa-play",
            externalLabel: "Watch on NotebookLM"
          },
          {
            heading: "Supplementary: Multiple Linear Regression (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/EkAQAi3a4js"
          },
          {
            heading: "Supplementary: Feature Scaling & Normalization",
            iframeUrl: "https://www.youtube.com/embed/mnKm3YP56PY"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/1g4_79dJFWBwH9XdCA7jhPl7zzMMrRiEO/preview"
          }
        ]
      },
      {
        id: 5,
        badge: "Lec 5",
        title: "Logistic Regression & Decision Boundary",
        preview: "Logistic regression for classification, sigmoid activation function, decision boundary thresholding, and log loss cost.",
        meta: "Logistic regression, sigmoid, decision boundary, binary classification, log loss",
        sections: [
          {
            heading: "Lecture Video Recording",
            // iframeUrl: "https://drive.google.com/file/d/19eg3QkhncvN3svLHl_JAXeX-Nx61oY2O/preview"
            iframeUrl: "https://drive.google.com/file/d/1zmYknCl7is1dnV3djtR6fQwo09AFUeKX/preview"
          },
          {
            heading: "Supplementary: Logistic Regression (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/yIYKR4sgzI8"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/1nIpqGzRbvwm7w1kMxgpylj3JMU6nS-AI/preview"
          }
        ]
      },
      {
        id: 6,
        badge: "Lec 6",
        title: "Regularization (L1 & L2 Norms)",
        preview: "Underfitting (bias) and overfitting (variance) diagnostics, L1 Lasso regularization (sparsity), and L2 Ridge regularization.",
        meta: "Overfitting, underfitting, L1 norm, Lasso, L2 norm, Ridge, lambda parameter",
        sections: [
          {
            heading: "Lecture Video Recording",
            iframeUrl: "https://drive.google.com/file/d/16qIQ_RidLosHyDEI7bNI9uYDiNMk3v4T/preview"
          },
          {
            heading: "Supplementary: Regularization (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/Q81RR3yKn30"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/1VLyUiLYnQOWUnFYIF12-LaaekYvAULwx/preview"
          }
        ]
      },
      {
        id: 7,
        badge: "Lec 7",
        title: "Model Evaluation & Selection",
        preview: "Train/validation/test splits, model selection, baseline performance comparison, and learning curves.",
        meta: "Validation set, evaluation, model selection, baseline, learning curves",
        sections: [
            {
            heading: "NotebookLM Video Overview",
            externalUrl: "https://notebooklm.google.com/notebook/e5ac5fea-c1dd-4a45-b80e-768c2a418f76/artifact/7692f843-3184-4639-bfe1-7a05baa02ed0?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_",
            externalIcon: "fa-play",
            externalLabel: "Watch on NotebookLM"
          },
          {
            heading: "Supplementary: Cross Validation (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/fSytzGwwBVw"
          },
          {
            heading: "Supplementary: Bias-Variance Tradeoff",
            iframeUrl: "https://www.youtube.com/embed/EuBBz3bI-aA"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/193eY3SyLU9LtNOGmfQOJjAClPiWKFL7G/preview"
          }
        ]
      },
      {
        id: 8,
        badge: "Lec 8",
        title: "Neural Networks & Optimization",
        preview: "Perceptron limits, Multi-Layer Perceptrons (MLPs), activation functions (ReLU, Softmax), backpropagation, and Adam optimizer.",
        meta: "Neural networks, MLP, ReLU, Softmax, backpropagation, Adam optimizer",
        sections: [
           {
            heading: "NotebookLM Video Overview",
            externalUrl: "https://notebooklm.google.com/notebook/e5ac5fea-c1dd-4a45-b80e-768c2a418f76/artifact/5b9ba75c-7835-4319-8bb4-c29fd94ad0d2?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_",
            externalIcon: "fa-play",
            externalLabel: "Watch on NotebookLM"
          },
          {
            heading: "Lecture Video Recording",
            iframeUrl: "https://drive.google.com/file/d/1LO9MC9CnxxIgYrdcLrMLbkRDMXMADQu3/preview"
          },
          {
            heading: "Supplementary: Neural Networks (3Blue1Brown)",
            iframeUrl: "https://www.youtube.com/embed/aircAruvnKk"
          },
          {
            heading: "Supplementary: Backpropagation (3Blue1Brown)",
            iframeUrl: "https://www.youtube.com/embed/Ilg3gGewQ5U"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/16ITEwry4saO_rBEEPhzsRswzZ3bOrZfV/preview"
          }
        ]
      },
      {
        id: 9,
        badge: "Lec 9",
        title: "Decision Trees & Ensemble Learning",
        preview: "ID3 tree construction (Entropy, Information Gain), regression trees, Random Forests (bagging/OOB), and Boosting (AdaBoost, XGBoost).",
        meta: "Decision trees, entropy, information gain, Random Forest, AdaBoost, boosting",
        sections: [
          {
            heading: "NotebookLM Video Overview",
            externalUrl: "https://notebooklm.google.com/notebook/e5ac5fea-c1dd-4a45-b80e-768c2a418f76/artifact/d3d79df1-1548-4f5c-9aa0-ee4cf08684ca?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_",
            externalIcon: "fa-play",
            externalLabel: "Watch on NotebookLM"
          },
          {
            heading: "Supplementary: Decision Trees (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/_L39rN6gz7Y"
          },
          {
            heading: "Supplementary: Random Forests Explained",
            iframeUrl: "https://www.youtube.com/embed/J4Wdy0Wc_xQ"
          },
          {
            heading: "Supplementary: AdaBoost (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/LsK-xG1cLYA"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/19lrZ1Y_sIg9-qGNp3fHBsBkC_K-9dhFB/preview"
          }
        ]
      },
      {
        id: 10,
        badge: "Lec 10",
        title: "Unsupervised Clustering & PCA",
        preview: "Centroid-based K-Means clustering, Elbow method, Anomaly Detection systems, and Principal Component Analysis (PCA).",
        meta: "K-Means, WCSS, elbow method, anomaly detection, PCA, dimensionality reduction",
        sections: [
          {
            heading: "Lecture Video Recording",
            // iframeUrl: "https://drive.google.com/file/d/1-yQDaorA15U4wh-EAzmlirFDdXB4AiWP/preview"
            iframeUrl: "https://drive.google.com/file/d/1AN34tN_YEMIBdIWnJaeEe6nxSB1ESzjl/preview"
          },
          {
            heading: "Supplementary: K-Means Clustering (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/4b5d3muPQmA"
          },
          {
            heading: "Supplementary: PCA Explained (StatQuest)",
            iframeUrl: "https://www.youtube.com/embed/FgakZw6K1QQ"
          },
          {
            heading: "Lecture Presentation (Slide)",
            iframeUrl: "https://drive.google.com/file/d/1TGe9MdS_k2aZ1_M50EUcOVS_tWRR4AL7/preview"
          }
        ]
      }
    ],
    examConfigs: [
      {
        id: 0,
        badge: "Lectures 1-4",
        title: "Exam 1: Regression Foundations & Scaling",
        desc: "Covers univariate/multivariate linear regression, Gradient Descent, cost functions, feature scaling, and polynomial transformations...",
        color: "badge-cyan",
        btnColor: "btn-primary"
      },
      {
        id: 1,
        badge: "Lectures 5-7",
        title: "Exam 2: Logistic Regression, Regularization & Evaluation",
        desc: "Covers classification limits, Sigmoid, log loss, Lasso (L1) vs. Ridge (L2) penalties, validation splits, and learning curves...",
        color: "badge-purple",
        btnColor: "btn-primary"
      },
      {
        id: 2,
        badge: "Lectures 8-10",
        title: "Exam 3: Neural Networks, Trees & Unsupervised Learning",
        desc: "Covers multilayer perceptrons, backpropagation, Adam optimization, Entropy/Information Gain, Random Forest/Boosting, K-Means, and PCA...",
        color: "badge-orange",
        btnColor: "btn-orange"
      }
    ]
  }
};
