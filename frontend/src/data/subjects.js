import { examData as advWebExams } from "./questions";
import { examData as cvExams } from "./cv-questions";
import { examData as iotExams } from "./iot-questions";

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
};
