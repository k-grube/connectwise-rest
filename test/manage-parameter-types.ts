import { expectTypeOf } from 'expect-type'
import type { CommonParameters } from '../src/ManageAPI'
import type { ServiceAPI, Ticket as ManageTicket } from '../src/Manage/ServiceAPI'

declare const serviceApi: ServiceAPI

const serviceTickets = serviceApi.getServiceTickets({
  fields: ['id', 'summary', 'company/id'],
  orderBy: [
    { field: 'company/id', direction: 'asc' },
    { field: 'summary', direction: 'desc' },
  ],
})

expectTypeOf(serviceTickets).toEqualTypeOf<Promise<ManageTicket[]>>()

const ticketParams: CommonParameters<ManageTicket> = {
  fields: ['id', 'company/id'],
  orderBy: [{ field: 'summary', direction: 'asc' }],
}

expectTypeOf(ticketParams).toEqualTypeOf<CommonParameters<ManageTicket>>()

// @ts-expect-error fields should be constrained to Ticket field paths.
serviceApi.getServiceTickets({ fields: ['notAField'] })

// @ts-expect-error nested fields should be constrained to valid nested paths.
serviceApi.getServiceTickets({ fields: ['company/notAField'] })

// @ts-expect-error orderBy fields should be constrained to Ticket field paths.
serviceApi.getServiceTickets({ orderBy: [{ field: 'notAField', direction: 'asc' }] })

// @ts-expect-error orderBy direction should be constrained to asc or desc.
serviceApi.getServiceTickets({ orderBy: [{ field: 'summary', direction: 'ascending' }] })
