import {
  CreditCard,
  CreditCardBack,
  CreditCardCvv,
  CreditCardExpiry,
  CreditCardMagStripe,
  CreditCardName,
  CreditCardNumber,
} from "../../../../../packages/credit-card"

const Example = () => (
  <CreditCard>
    <CreditCardBack className="bg-[#9EE672] text-black">
      <CreditCardMagStripe />
      <CreditCardNumber className="absolute bottom-0 left-0">
        0123 4567 8901 2345
      </CreditCardNumber>
      <div className="absolute bottom-8 flex w-full flex-col gap-4 @xs:bottom-12 @xs:flex-row @xs:justify-between">
        <CreditCardName className="flex-1">Updated Connor Love</CreditCardName>
        <div className="flex flex-1 gap-4 @xs:justify-between">
          <CreditCardExpiry>01/24</CreditCardExpiry>
          <CreditCardCvv>123</CreditCardCvv>
        </div>
      </div>
    </CreditCardBack>
  </CreditCard>
)

export default Example
