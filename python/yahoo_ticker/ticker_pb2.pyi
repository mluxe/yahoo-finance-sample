from google.protobuf.internal import enum_type_wrapper as _enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class Ticker(_message.Message):
    __slots__ = ("id", "price", "time", "currency", "exchange", "quoteType", "marketHours", "changePercent", "dayVolume", "dayHigh", "dayLow", "change", "shortName", "expireDate", "openPrice", "previousClose", "strikePrice", "underlyingSymbol", "openInterest", "optionsType", "miniOption", "lastSize", "bid", "bidSize", "ask", "askSize", "priceHint", "vol_24hr", "volAllCurrencies", "fromcurrency", "lastMarket", "circulatingSupply", "marketcap")
    class QuoteType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        NONE: _ClassVar[Ticker.QuoteType]
        ALTSYMBOL: _ClassVar[Ticker.QuoteType]
        HEARTBEAT: _ClassVar[Ticker.QuoteType]
        EQUITY: _ClassVar[Ticker.QuoteType]
        INDEX: _ClassVar[Ticker.QuoteType]
        MUTUALFUND: _ClassVar[Ticker.QuoteType]
        MONEYMARKET: _ClassVar[Ticker.QuoteType]
        OPTION: _ClassVar[Ticker.QuoteType]
        CURRENCY: _ClassVar[Ticker.QuoteType]
        WARRANT: _ClassVar[Ticker.QuoteType]
        BOND: _ClassVar[Ticker.QuoteType]
        FUTURE: _ClassVar[Ticker.QuoteType]
        ETF: _ClassVar[Ticker.QuoteType]
        COMMODITY: _ClassVar[Ticker.QuoteType]
        ECNQUOTE: _ClassVar[Ticker.QuoteType]
        CRYPTOCURRENCY: _ClassVar[Ticker.QuoteType]
        INDICATOR: _ClassVar[Ticker.QuoteType]
        INDUSTRY: _ClassVar[Ticker.QuoteType]
    NONE: Ticker.QuoteType
    ALTSYMBOL: Ticker.QuoteType
    HEARTBEAT: Ticker.QuoteType
    EQUITY: Ticker.QuoteType
    INDEX: Ticker.QuoteType
    MUTUALFUND: Ticker.QuoteType
    MONEYMARKET: Ticker.QuoteType
    OPTION: Ticker.QuoteType
    CURRENCY: Ticker.QuoteType
    WARRANT: Ticker.QuoteType
    BOND: Ticker.QuoteType
    FUTURE: Ticker.QuoteType
    ETF: Ticker.QuoteType
    COMMODITY: Ticker.QuoteType
    ECNQUOTE: Ticker.QuoteType
    CRYPTOCURRENCY: Ticker.QuoteType
    INDICATOR: Ticker.QuoteType
    INDUSTRY: Ticker.QuoteType
    class OptionType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        CALL: _ClassVar[Ticker.OptionType]
        PUT: _ClassVar[Ticker.OptionType]
    CALL: Ticker.OptionType
    PUT: Ticker.OptionType
    class MarketHoursType(int, metaclass=_enum_type_wrapper.EnumTypeWrapper):
        __slots__ = ()
        PRE_MARKET: _ClassVar[Ticker.MarketHoursType]
        REGULAR_MARKET: _ClassVar[Ticker.MarketHoursType]
        POST_MARKET: _ClassVar[Ticker.MarketHoursType]
        EXTENDED_HOURS_MARKET: _ClassVar[Ticker.MarketHoursType]
    PRE_MARKET: Ticker.MarketHoursType
    REGULAR_MARKET: Ticker.MarketHoursType
    POST_MARKET: Ticker.MarketHoursType
    EXTENDED_HOURS_MARKET: Ticker.MarketHoursType
    ID_FIELD_NUMBER: _ClassVar[int]
    PRICE_FIELD_NUMBER: _ClassVar[int]
    TIME_FIELD_NUMBER: _ClassVar[int]
    CURRENCY_FIELD_NUMBER: _ClassVar[int]
    EXCHANGE_FIELD_NUMBER: _ClassVar[int]
    QUOTETYPE_FIELD_NUMBER: _ClassVar[int]
    MARKETHOURS_FIELD_NUMBER: _ClassVar[int]
    CHANGEPERCENT_FIELD_NUMBER: _ClassVar[int]
    DAYVOLUME_FIELD_NUMBER: _ClassVar[int]
    DAYHIGH_FIELD_NUMBER: _ClassVar[int]
    DAYLOW_FIELD_NUMBER: _ClassVar[int]
    CHANGE_FIELD_NUMBER: _ClassVar[int]
    SHORTNAME_FIELD_NUMBER: _ClassVar[int]
    EXPIREDATE_FIELD_NUMBER: _ClassVar[int]
    OPENPRICE_FIELD_NUMBER: _ClassVar[int]
    PREVIOUSCLOSE_FIELD_NUMBER: _ClassVar[int]
    STRIKEPRICE_FIELD_NUMBER: _ClassVar[int]
    UNDERLYINGSYMBOL_FIELD_NUMBER: _ClassVar[int]
    OPENINTEREST_FIELD_NUMBER: _ClassVar[int]
    OPTIONSTYPE_FIELD_NUMBER: _ClassVar[int]
    MINIOPTION_FIELD_NUMBER: _ClassVar[int]
    LASTSIZE_FIELD_NUMBER: _ClassVar[int]
    BID_FIELD_NUMBER: _ClassVar[int]
    BIDSIZE_FIELD_NUMBER: _ClassVar[int]
    ASK_FIELD_NUMBER: _ClassVar[int]
    ASKSIZE_FIELD_NUMBER: _ClassVar[int]
    PRICEHINT_FIELD_NUMBER: _ClassVar[int]
    VOL_24HR_FIELD_NUMBER: _ClassVar[int]
    VOLALLCURRENCIES_FIELD_NUMBER: _ClassVar[int]
    FROMCURRENCY_FIELD_NUMBER: _ClassVar[int]
    LASTMARKET_FIELD_NUMBER: _ClassVar[int]
    CIRCULATINGSUPPLY_FIELD_NUMBER: _ClassVar[int]
    MARKETCAP_FIELD_NUMBER: _ClassVar[int]
    id: str
    price: float
    time: int
    currency: str
    exchange: str
    quoteType: Ticker.QuoteType
    marketHours: Ticker.MarketHoursType
    changePercent: float
    dayVolume: int
    dayHigh: float
    dayLow: float
    change: float
    shortName: str
    expireDate: int
    openPrice: float
    previousClose: float
    strikePrice: float
    underlyingSymbol: str
    openInterest: int
    optionsType: Ticker.OptionType
    miniOption: int
    lastSize: int
    bid: float
    bidSize: int
    ask: float
    askSize: int
    priceHint: int
    vol_24hr: int
    volAllCurrencies: int
    fromcurrency: str
    lastMarket: str
    circulatingSupply: float
    marketcap: float
    def __init__(self, id: _Optional[str] = ..., price: _Optional[float] = ..., time: _Optional[int] = ..., currency: _Optional[str] = ..., exchange: _Optional[str] = ..., quoteType: _Optional[_Union[Ticker.QuoteType, str]] = ..., marketHours: _Optional[_Union[Ticker.MarketHoursType, str]] = ..., changePercent: _Optional[float] = ..., dayVolume: _Optional[int] = ..., dayHigh: _Optional[float] = ..., dayLow: _Optional[float] = ..., change: _Optional[float] = ..., shortName: _Optional[str] = ..., expireDate: _Optional[int] = ..., openPrice: _Optional[float] = ..., previousClose: _Optional[float] = ..., strikePrice: _Optional[float] = ..., underlyingSymbol: _Optional[str] = ..., openInterest: _Optional[int] = ..., optionsType: _Optional[_Union[Ticker.OptionType, str]] = ..., miniOption: _Optional[int] = ..., lastSize: _Optional[int] = ..., bid: _Optional[float] = ..., bidSize: _Optional[int] = ..., ask: _Optional[float] = ..., askSize: _Optional[int] = ..., priceHint: _Optional[int] = ..., vol_24hr: _Optional[int] = ..., volAllCurrencies: _Optional[int] = ..., fromcurrency: _Optional[str] = ..., lastMarket: _Optional[str] = ..., circulatingSupply: _Optional[float] = ..., marketcap: _Optional[float] = ...) -> None: ...
