create table TopicSummary (idx int, topic_score real, doc_purity real, name varchar(100), topic_list varchar(MAX), PRIMARY KEY (idx));
create table TopicScores (EmailRecNo varchar(255), idx int, score real, PRIMARY KEY (EmailRecNo, idx));