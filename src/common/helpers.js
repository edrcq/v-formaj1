
export default {
    todayTs() {
        const d = new Date()
        d.setHours(0,0,0,0)
        return (+d)
    },

    nextDayTs() {
        const d = new Date()
        d.setHours(24,0,0,0)
        return (+d)
    }
}