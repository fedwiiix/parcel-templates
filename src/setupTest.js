import '@testing-library/jest-dom';

/*test("Le titre devrait s'afficher", function () {
    render(<Modal title="Bonjour les gens" onClose={() => null}>Bonjour</Modal>)
    const title = screen.getByText('Bonjour les gens')
    expect(title).toBeInTheDocument()
})

test('Le callback de fermeture est appelé lors du clic sur x', function () {
    const mockClose = jest.fn()
    render(<Modal title="Bonjour les gens" onClose={mockClose}>Bonjour</Modal>)
    const close = document.body.querySelector("[aria-label='Fermer']")
    fireEvent.click(close)
    expect(mockClose.mock.calls.length).toBe(1)
})

test('Le callback de fermeture est appelé avec échap', function () {
    const mockClose = jest.fn()
    render(<Modal title="Bonjour les gens" onClose={mockClose}>Bonjour</Modal>)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(mockClose.mock.calls.length).toBe(1)
})

test("Le callback de fermeture n'est pas appelé avec une autre touché qu'échap", function () {
    const mockClose = jest.fn()
    render(<Modal title="Bonjour les gens" onClose={mockClose}>Bonjour</Modal>)
    fireEvent.keyDown(document, { key: 'Enter' })
    expect(mockClose.mock.calls.length).toBe(0)
})*/