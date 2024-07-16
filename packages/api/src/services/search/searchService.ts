/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { QueryClient } from '@tanstack/react-query'

import { APIBuilder } from '../../lib/fetcher'

import { SearchDTO, SearchHit, SearchResponse } from './model'

const groupByVocabularyUid = (response: SearchResponse): SearchResponse => {
  const grouped: SearchResponse = {
    code: response.code,
    result: {
      ...response.result,
      records: [],
    },
  }

  const records: SearchResponse['result']['records'] = []

  const hitIds = new Set<string>()

  response.result.records.forEach((record) => {
    const vocabularyUid = record.vocabularyUid

    const existingRecord = records.find(
      (r) => r.vocabularyUid === vocabularyUid,
    )

    if (existingRecord) {
      const uniqueHits: SearchHit[] = []

      record.hits.forEach((hit) => {
        if (!hitIds.has(hit.uid)) {
          hitIds.add(hit.uid)
          uniqueHits.push(hit)
        }
      })

      existingRecord.hits.push(...uniqueHits)
    } else {
      const uniqueHits: SearchHit[] = []

      record.hits.forEach((hit) => {
        if (!hitIds.has(hit.uid)) {
          hitIds.add(hit.uid)
          uniqueHits.push(hit)
        }
      })

      records.push({
        vocabularyUid,
        hits: uniqueHits,
      })
    }
  })

  grouped.result.records = records

  return grouped
}

export const searchService = {
  async search(dto: SearchDTO, client: QueryClient) {
    const result = await APIBuilder.post('/terms/search')
      .withCredentials(client)
      .build()
      .call<SearchResponse>({
        body: JSON.stringify(dto),
      })

    return groupByVocabularyUid(result)
  },
}
