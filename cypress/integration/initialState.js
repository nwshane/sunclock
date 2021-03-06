const stubAppToChooseBucharest = pageWindow => {
  // make app choose Bucharest as its random location
  const bucharestNumLocation = 267
  const totalLocations = 349
  cy
    .stub(pageWindow.Math, 'random')
    .returns(bucharestNumLocation / totalLocations)
}

describe('Initial State', () => {
  it('shows current date by default', () => {
    const now = new Date(2018, 3, 24, 10, 25, 15).getTime()
    const clock = cy.clock(now)

    cy.visitWithStubbedLocation('')

    cy.contains('Show My Location').click()

    cy.contains('6:36 am')
    cy.contains('6:39 pm')
    cy.contains('10:25 am')
    cy
      .get('[data-test="clock-date-select-container"] input')
      .should('have.value', '2018-04-24')
  })

  it('shows random location by default', () => {
    cy.visit('', {
      onBeforeLoad(pageWindow) {
        stubAppToChooseBucharest(pageWindow)
      }
    })
    cy.contains('Bucharest (Romania)')
  })

  context('when location but not date is specified in URL', () => {
    it('shows local location date and time', () => {
      const now = new Date(2018, 4, 10, 20, 25, 15).getTime()
      const clock = cy.clock(now)

      cy.visitWithStubbedLocation('?location=Dubai_United_Arab_Emirates')

      cy.contains('Dubai (United Arab Emirates)')

      cy
        .get('[data-test="clock-date-select-container"] input')
        .should('have.value', '2018-05-11')

      cy.contains('3:25 am')
    })
  })

  context('when date but not location is specified in URL', () => {
    it("shows the URL date and the randomly selected location's time", () => {
      const now = new Date(2018, 3, 24, 23, 25, 15).getTime()
      const clock = cy.clock(now)
      cy.visitWithStubbedLocation('?date=2018-05-07', {
        onBeforeLoad(pageWindow) {
          stubAppToChooseBucharest(pageWindow)
        }
      })

      cy
        .get('[data-test="clock-date-select-container"] input')
        .should('have.value', '2018-05-07')

      cy.contains('5:25 am')
    })
  })

  context(
    'when date and location are specified in URL and location is one day ahead',
    () => {
      it('shows date specified in URL and time for location', () => {
        const now = new Date(2018, 3, 24, 23, 25, 15).getTime()
        const clock = cy.clock(now)
        cy.visitWithStubbedLocation(
          '?date=2018-05-07&location=Dubai_United_Arab_Emirates'
        )

        cy
          .get('[data-test="clock-date-select-container"] input')
          .should('have.value', '2018-05-07')

        cy.contains('6:25 am')
      })
    }
  )

  context(
    'when date and location are specified in URL and location is one day behind',
    () => {
      it('shows date specified in URL and time for location', () => {
        const now = new Date(2018, 3, 24, 0, 25, 15).getTime()
        const clock = cy.clock(now)
        cy.visitWithStubbedLocation(
          '?date=2018-05-07&location=San_Francisco_United_States'
        )

        cy
          .get('[data-test="clock-date-select-container"] input')
          .should('have.value', '2018-05-07')

        cy.contains('8:25 pm')
      })
    }
  )
})
