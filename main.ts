/**
 * Provides access to SCD30 CO2 sensor functionality.
 */
//% color=190 weight=100 icon="\uf1ec" block="SDC30 Blocks"
namespace SCD30 {
    //% blockId=device_show_number
    //% block="show|number %v"
    export function showNumber(v: number, interval: number = 150): void
    { }
    //% blockId=scd30_wait_ready
    export function warte_bis_bereit (): void {
        istBereit = 0
        while (istBereit == 0) {
            // checken, ob Werte anliegen
            pins.i2cWriteNumber(
                SCD30ADR,
                GetDataReadyStatusCMD,
                NumberFormat.UInt16BE,
                false
            )
            // 3ms warten
            control.waitMicros(3000)
            istBereit = pins.i2cReadNumber(SCD30ADR, NumberFormat.UInt16BE, false)
        }
    }
}