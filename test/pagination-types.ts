import { expectTypeOf } from 'expect-type'
import type Manage from '../src/Manage'

type Ticket = { id: number; summary: string }
type TicketParams = { conditions?: string; page?: number; pageSize?: number }

declare const paginate: Manage['paginate']
declare const getTickets: (params: TicketParams) => Promise<Ticket[]>

const tickets = paginate(getTickets, { pageSize: 100 }, { conditions: 'closedFlag = false' })

expectTypeOf(tickets).toEqualTypeOf<Promise<Ticket[]>>()

// @ts-expect-error paginate should preserve the API method argument types.
paginate(getTickets, { pageSize: 100 }, { invalid: true })
