import * as UserTokensRepository from "@modules/users/infra/typeorm/repositories/UserTokensRepository"
// @ponicode
describe("findByToken", () => {
    let inst: any

    beforeEach(() => {
        inst = new UserTokensRepository.default()
    })

    test("0", async () => {
        await inst.findByToken(">")
    })

    test("1", async () => {
        await inst.findByToken("not in")
    })

    test("2", async () => {
        await inst.findByToken("{")
    })

    test("3", async () => {
        await inst.findByToken("}}")
    })

    test("4", async () => {
        await inst.findByToken("<")
    })

    test("5", async () => {
        await inst.findByToken("")
    })
})
