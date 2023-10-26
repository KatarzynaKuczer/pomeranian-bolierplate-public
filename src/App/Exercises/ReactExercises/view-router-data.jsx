import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { ReactEventsUseStateMetaData } from './ReactEventsUseState/router-data';
import { ReactIfStatementsMetaData } from './ReactIfStatements/router-data';
import { ReactIfStatementsMoreOrLessMetaData } from './ReactIfStatementsMoreOrLess/router-data';
import { TryCatchAndFinallyMetaData } from './TryCatchAndFinally/router-data';
import { ReactTodoWithServerMetaData } from './ToDoWithServer/router-data';
import { ReactTodoWithServerTeamworkMetaData } from './ToDoWithServerTeamwork/router-data';
import { ReactFormsMetaData } from './Forms/router-data';
import { ReactFormExampleMetaData } from './FormExample/router-data';
import { ReactAuthFirebaseMetaData } from './AuthFirebase/router-data';
import { ReactTestingMetaData } from './Testing/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactEventsUseStateMetaData,
  ReactIfStatementsMetaData,
  ReactIfStatementsMoreOrLessMetaData,
  TryCatchAndFinallyMetaData,
  ReactTodoWithServerMetaData,
  ReactTodoWithServerTeamworkMetaData,
  ReactFormsMetaData,
  ReactFormExampleMetaData,
  ReactAuthFirebaseMetaData,
  ReactTestingMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
