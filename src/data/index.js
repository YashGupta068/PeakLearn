import oops from './oops';
import dataStructures from './dataStructures';
import dataStructuresJava from './dataStructuresJava';
import dataStructuresCpp from './dataStructuresCpp';
import softwareEngineering from './softwareEngineering';
import operatingSystems from './operatingSystems';
import dbms from './dbms';
import rdbms from './rdbms';

export const mcqData = {
  oops,
  data_structures: dataStructures,
  data_structures_java: dataStructuresJava,
  data_structures_cpp: dataStructuresCpp,
  software_engineering: softwareEngineering,
  operating_systems: operatingSystems,
  dbms,
  rdbms,
};

export const topicKeys = Object.keys(mcqData);

export function getTopicData(topic) {
  return mcqData[topic] ?? null;
}
