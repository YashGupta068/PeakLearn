export const TOPIC_COLORS = {
  oops: 'blue',
  data_structures: 'green',
  data_structures_java: 'orange',
  data_structures_cpp: 'blue',
  software_engineering: 'orange',
  operating_systems: 'red',
  dbms: 'blue',
  rdbms: 'blue',
};

export function formatTopicName(topic) {
  return topic.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}
