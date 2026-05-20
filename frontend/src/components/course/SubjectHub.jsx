import { useState } from 'react';
import { useExamContext } from '../../context/ExamContext';
import { examData } from '../../data/questions';

const chapters = [
    {
        id: 1,
        badge: 'Ch 1',
        title: 'Reliable, Scalable, & Maintainable Applications',
        preview: 'Hardware/software faults, load parameters, and latency vs. throughput trade-offs.',
        meta: 'Reliability, scalability, maintainability',
        sections: [
            {
                heading: 'Data-intensive applications',
                body: [
                    'Modern applications are often data-intensive rather than CPU-intensive. They depend on databases, caches, search indexes, stream processing, and batch processing to store, speed up, search, move, and analyze large amounts of data.'
                ]
            },
            {
                heading: 'Reliability',
                body: [
                    'A reliable system continues to work correctly even when things go wrong. A fault is one component deviating from its specification; a failure is when the whole system stops providing service to users.'
                ],
                bullets: [
                    'Hardware faults include disk crashes and power outages. Redundancy, RAID, and backups help tolerate them.',
                    'Software faults include bugs that crash services or corrupt behavior.',
                    'Human errors are a leading cause of outages. Good APIs, sandbox environments, automated tests, and quick rollback reduce the damage.'
                ]
            },
            {
                heading: 'Scalability',
                body: [
                    'Scalability is about dealing with growth in data volume or traffic. To discuss it clearly, describe load with parameters such as requests per second and read/write ratio.',
                    'Performance should be described with response time and percentiles. Median latency shows the typical user experience, while tail latencies such as p99 matter because they affect the slowest and often most important requests.'
                ]
            },
            {
                heading: 'Maintainability',
                body: [
                    'Maintainability means making the system easy for people to work on productively over time.'
                ],
                bullets: [
                    'Operability: routine operational tasks are easy, with good monitoring and automation.',
                    'Simplicity: abstraction hides complex implementation details.',
                    'Evolvability: the system can adapt when requirements change.'
                ]
            }
        ]
    },
    {
        id: 2,
        badge: 'Ch 2',
        title: 'Data Models & Query Languages',
        preview: 'Comparing Relational, Document, NoSQL, and Graph schemas for complex relationships.',
        meta: 'SQL, document models, graph models, query languages',
        sections: [
            {
                heading: 'Abstraction layers',
                body: [
                    'Applications are built through layers of data models. Each layer gives the layer above it a cleaner abstraction and hides complexity below it.'
                ],
                bullets: [
                    'Application developers model the real world as objects, data structures, and APIs.',
                    'Storage representation expresses those structures as JSON, XML, tables, or graphs.',
                    'Database software translates those models into bytes in memory, on disk, or over the network.',
                    'Hardware represents bytes physically as electrical currents, light pulses, or magnetic fields.'
                ]
            },
            {
                heading: 'Relational model',
                body: [
                    'Relational databases organize data into tables made of unordered rows. Their strength is hiding internal storage behind a clean interface.',
                    'The impedance mismatch is the awkward translation between object-oriented code and relational tables. ORMs reduce boilerplate, but they cannot remove the mismatch completely.'
                ]
            },
            {
                heading: 'Document model',
                body: [
                    'Document databases are useful for flexible schemas, high scalability, specialized queries, and self-contained records. Schema-on-read means the structure is interpreted when data is read; schema-on-write means the database enforces structure when data is written.',
                    'Documents give good locality because related data can be stored together, but they are weaker for joins and many-to-many relationships. Those joins often move into application code.'
                ]
            },
            {
                heading: 'Query languages and graphs',
                body: [
                    'Declarative languages such as SQL and CSS describe what result is wanted, not the exact steps to produce it. This makes queries shorter, hides implementation details, and allows database engines to optimize or parallelize execution.',
                    'Graph models are best when relationships are highly interconnected. Property graphs, triple-stores, SPARQL, Cypher, and Datalog all model networks of vertices, edges, and facts in different ways.'
                ]
            }
        ]
    },
    {
        id: 3,
        badge: 'Ch 3',
        title: 'Storage & Retrieval',
        preview: 'Diving into SSTables, Log-Structured Merge Trees, memtables, and Bloom filters.',
        meta: 'Indexes, LSM trees, B-trees, OLTP vs OLAP',
        sections: [
            {
                heading: 'Database basics and indexes',
                body: [
                    'A database stores data when given it and returns data when asked. Understanding storage internals helps you choose the right engine for transactional or analytical workloads.',
                    'An append-only log gives excellent write performance because appending is sequential, but terrible read performance without an index. Indexes speed reads, but every index slows writes because it must be updated.'
                ]
            },
            {
                heading: 'Hash indexes',
                body: [
                    'A hash index maps keys to byte offsets in an append-only file. It is fast when all keys fit in memory and supports compaction, merging, tombstone deletes, checksums, and concurrent readers over immutable segments.'
                ],
                bullets: [
                    'Strength: simple and very fast point lookups.',
                    'Limitation: keys must fit in RAM.',
                    'Limitation: range queries are inefficient.'
                ]
            },
            {
                heading: 'SSTables and LSM trees',
                body: [
                    'SSTables are sorted string tables: immutable segments sorted by key. Writes go into a sorted in-memory memtable, then flush to disk as an SSTable. A write-ahead log protects the memtable after crashes.',
                    'Reads check the memtable, then newer SSTables, then older SSTables. Bloom filters avoid unnecessary disk reads, and compaction merges files through size-tiered or leveled strategies.'
                ]
            },
            {
                heading: 'B-trees and analytics',
                body: [
                    'B-trees divide the database into fixed-size pages and keep the tree balanced with page splits. They are the classic relational index structure and usually favor reads over write-heavy workloads.',
                    'OLTP handles many small user-facing lookups where disk seek time matters. OLAP scans huge datasets for analysis where disk bandwidth matters, often using warehouses, ETL, star schemas, and column-oriented storage.'
                ]
            }
        ]
    },
    {
        id: 4,
        badge: 'Ch 4',
        title: 'Encoding & Evolution',
        preview: 'Data evolution systems, schema compatibility, JSON, XML, Protobuf, Thrift, and Avro.',
        meta: 'Serialization, compatibility, schemas, services',
        sections: [
            {
                heading: 'Evolution and compatibility',
                body: [
                    'Applications change over time, so old and new code often coexist during rolling upgrades. Backward compatibility means newer code can read old data. Forward compatibility means older code can read newer data by ignoring unknown additions.'
                ]
            },
            {
                heading: 'Encoding formats',
                body: [
                    'Encoding turns in-memory structures into bytes for disk or network use. Decoding turns those bytes back into in-memory data.',
                    'Language-specific formats such as Java Serializable or Python pickle are convenient, but risky for long-term storage because they are language-tied, insecure, and weak at versioning.'
                ],
                bullets: [
                    'JSON, XML, and CSV are human-readable but have number ambiguity, weak binary support, and schema limitations.',
                    'MessagePack and BSON keep JSON-like models but still carry field names.',
                    'Thrift and Protocol Buffers use schemas and compact field tags.',
                    'Avro uses writer and reader schemas, matches fields by name, and is very compact.'
                ]
            },
            {
                heading: 'Schema evolution',
                body: [
                    'In Protobuf and Thrift, new fields should be optional or have defaults, and removed field tags should not be reused. In Avro, fields can be added or removed when defaults make old and new schemas resolvable.',
                    'Schemas are valuable because they make data compact, act as documentation, enable static checking, and allow compatibility checks before deployment.'
                ]
            },
            {
                heading: 'Dataflow modes',
                body: [
                    'Through databases, data outlives code, so preserving unknown fields is important. Through services, REST and RPC move data across HTTP or internal networks, but RPC cannot truly behave like a local call because networks are unreliable.',
                    'Through message passing, brokers such as Kafka or RabbitMQ buffer messages, redeliver after crashes, decouple senders from recipients, and support fan-out.'
                ]
            }
        ]
    },
    {
        id: 5,
        badge: 'Ch 5',
        title: 'Replication & Distributed Nodes',
        preview: 'Single-leader, multi-leader, leaderless systems, quorums, and replication lag.',
        meta: 'Replication, consistency, failover, quorums',
        sections: [
            {
                heading: 'Why replication exists',
                body: [
                    'Replication keeps copies of the same data on multiple machines. It reduces latency by keeping data near users, increases availability when nodes fail, and improves read throughput by spreading reads across machines.'
                ]
            },
            {
                heading: 'Single-leader replication',
                body: [
                    'In single-leader replication, one leader accepts writes and followers consume the replication log in order. Reads may go to the leader or followers.',
                    'Synchronous replication keeps a follower up to date but can block writes. Asynchronous replication keeps the leader available but risks losing unreplicated writes if the leader fails.'
                ],
                bullets: [
                    'Follower recovery uses local logs to catch up from the leader.',
                    'Leader failover detects failure, promotes a follower, and reroutes clients.',
                    'Pitfalls include split brain, discarded writes, and timeouts that are too short.'
                ]
            },
            {
                heading: 'Replication lag',
                body: [
                    'Asynchronous followers may lag behind the leader, creating temporary inconsistencies. Read-after-write consistency makes users see their own updates. Monotonic reads prevent users from going backward in time. Consistent prefix reads preserve causal order.'
                ]
            },
            {
                heading: 'Multi-leader and leaderless systems',
                body: [
                    'Multi-leader replication allows several nodes to accept writes, which helps multi-datacenter and offline use cases but introduces write conflicts. Conflict avoidance, last-write-wins, merging, custom handlers, CRDTs, and operational transformation are possible strategies.',
                    'Leaderless systems let any replica accept writes. Clients write to several replicas and read from several replicas. A strict quorum uses w + r > n so the read and write sets overlap, but sloppy quorums, hinted handoff, concurrent writes, and clock skew can still produce stale or conflicting values.'
                ]
            }
        ]
    }
];

export default function SubjectHub() {
    const { navigateTo, setCurrentSession } = useExamContext();
    const [selectedChapterId, setSelectedChapterId] = useState(null);
    const selectedChapter = chapters.find(chapter => chapter.id === selectedChapterId);
    const examCounts = {
        exam1: examData.find(exam => exam.examId === 0)?.questions.length || 0,
        exam2: examData.find(exam => exam.examId === 1)?.questions.length || 0,
        exam3: examData.find(exam => exam.examId === 2)?.questions.length || 0,
        total: examData.reduce((sum, exam) => sum + exam.questions.length, 0)
    };

    const handleConfigureExam = (examId) => {
        // Just set the examId in current session for the config view to pick up
        setCurrentSession(prev => ({ ...prev, examId }));
        navigateTo('view-exam-config');
    };

    if (selectedChapter) {
        return (
            <section id="view-subject-hub" className="app-view active">
                <article className="chapter-blog-page">
                    <button className="btn-back" onClick={() => setSelectedChapterId(null)}>
                        <i className="fa-solid fa-chevron-left"></i> Back to Course Hub
                    </button>

                    <header className="chapter-blog-hero">
                        <span className="chapter-blog-kicker">{selectedChapter.badge} Summary</span>
                        <h1>{selectedChapter.title}</h1>
                        <p>{selectedChapter.preview}</p>
                        <div className="chapter-blog-meta">
                            <span><i className="fa-solid fa-book-open"></i> Advanced Programming Web</span>
                            <span><i className="fa-solid fa-layer-group"></i> {selectedChapter.meta}</span>
                        </div>
                    </header>

                    <div className="chapter-blog-body">
                        {selectedChapter.sections.map((section) => (
                            <section className="chapter-blog-section" key={section.heading}>
                                <h2>{section.heading}</h2>
                                {section.body?.map((paragraph) => (
                                    <p key={paragraph}>{paragraph}</p>
                                ))}
                                {section.bullets && (
                                    <ul>
                                        {section.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>
                </article>
            </section>
        );
    }

    return (
        <section id="view-subject-hub" className="app-view active">
            <div className="view-header">
                <button className="btn-back" onClick={() => navigateTo('view-dashboard')}>
                    <i className="fa-solid fa-chevron-left"></i> Back to Dashboard
                </button>
                <h1 className="view-title"><i className="fa-solid fa-code text-accent"></i> Advanced Programming Web</h1>
                <p className="view-subtitle">Designing Data-Intensive Applications Syllabus (Chapters 1 to 5)</p>
            </div>

            <div className="subject-details-grid">
                
                {/* Left: Syllabus Map & Chapters Card */}
                <div className="syllabus-card card">
                    <h3 className="card-title"><i className="fa-solid fa-map-location-dot"></i> Course Syllabus</h3>
                    <p className="card-subtitle">Exams strictly focus on the core foundational concepts of the first 5 chapters:</p>
                    
                    <ul className="syllabus-list">
                        {chapters.map((chapter) => (
                            <li
                                className="syllabus-item syllabus-item-link active"
                                key={chapter.id}
                                onClick={() => setSelectedChapterId(chapter.id)}
                                tabIndex="0"
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setSelectedChapterId(chapter.id);
                                    }
                                }}
                            >
                                <div className="ch-badge">{chapter.badge}</div>
                                <div className="ch-info">
                                    <h4>{chapter.title}</h4>
                                    <p>{chapter.preview}</p>
                                </div>
                                <i className="fa-solid fa-arrow-right ch-open-icon"></i>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Active Exams Panel */}
                <div className="exams-list-container">
                    <h3 className="container-title"><i className="fa-solid fa-paper-plane text-accent"></i> Core Course Exams</h3>
                    
                    <div className="exams-grid">
                        <div className="exam-card card-glow">
                            <div className="exam-card-header">
                                <span className="exam-badge badge-cyan">Chapters 1-3</span>
                                <h4 className="exam-card-title">Exam 1: LSM Trees, NoSQL, & DB Concepts</h4>
                            </div>
                            <p className="exam-card-desc">Comprehensive test covering read/write amplification, NoSQL models, SSTable immutability...</p>
                            <div className="exam-card-footer">
                                <div className="exam-meta">
                                    <span><i className="fa-solid fa-question-circle"></i> {examCounts.exam1} Questions</span>
                                </div>
                                <button className="btn btn-primary" onClick={() => handleConfigureExam(0)}>Configure Exam</button>
                            </div>
                        </div>

                        <div className="exam-card card-glow">
                            <div className="exam-card-header">
                                <span className="exam-badge badge-purple">Chapter 5</span>
                                <h4 className="exam-card-title">Exam 2: Replication & Distributed Systems</h4>
                            </div>
                            <p className="exam-card-desc">Tests your knowledge of single-leader, multi-leader, and leaderless replication protocols...</p>
                            <div className="exam-card-footer">
                                <div className="exam-meta">
                                    <span><i className="fa-solid fa-question-circle"></i> {examCounts.exam2} Questions</span>
                                </div>
                                <button className="btn btn-primary" onClick={() => handleConfigureExam(1)}>Configure Exam</button>
                            </div>
                        </div>

                        <div className="exam-card card-glow">
                            <div className="exam-card-header">
                                <span className="exam-badge badge-orange">Chapters 1-5</span>
                                <h4 className="exam-card-title">Exam 3: Comparisons & Deep Analysis</h4>
                            </div>
                            <p className="exam-card-desc">Comparison tables, follow-up MCQs, and open-ended essay questions...</p>
                            <div className="exam-card-footer">
                                <div className="exam-meta">
                                    <span><i className="fa-solid fa-table-columns"></i> {examCounts.exam3} Deep Questions</span>
                                </div>
                                <button className="btn btn-orange" onClick={() => handleConfigureExam(2)}>Configure Exam</button>
                            </div>
                        </div>

                        <div className="exam-card card-glow">
                            <div className="exam-card-header">
                                <span className="exam-badge badge-cyan">Chapters 1-5</span>
                                <h4 className="exam-card-title">Custom Mock: Mixed Question Bank</h4>
                            </div>
                            <p className="exam-card-desc">Randomized practice across all available MCQs, comparisons, and essay review prompts from chapters 1 to 5.</p>
                            <div className="exam-card-footer">
                                <div className="exam-meta">
                                    <span><i className="fa-solid fa-shuffle"></i> {examCounts.total} Total Items</span>
                                </div>
                                <button className="btn btn-primary" onClick={() => handleConfigureExam('custom')}>Configure Mock</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
