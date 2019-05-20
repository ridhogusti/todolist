import { all } from 'redux-saga/effects'
import watchExample from './screens/Example/saga'

export default function* rootSaga() {
  yield all([watchExample()])
}
