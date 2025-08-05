import { gql } from "@apollo/client";

export const GET_USER_PROGRESS_BY_SUBSURVEY_ID = gql`
  query UserProgressBySubSurveyActivityId($subSurveyActivityId: String!) {
    userProgressBySubSurveyActivityId(subSurveyActivityId: $subSurveyActivityId) {
      id
      userId
      subSurveyActivityId
      totalAssigned
      submitCount
      approvedCount
      rejectedCount
      lastUpdated
      user {
        id
        name
      }
    }
  }
`;
