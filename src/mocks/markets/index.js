import summaryMockJSON from './marketSummary.json'
import moversMockJSON from './marketMovers.json'

const summaryMock = summaryMockJSON.marketSummaryResponse.result
const moversMock = moversMockJSON.finance.result

export default {
    summaryMock,
    moversMock
}