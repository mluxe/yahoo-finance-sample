import yahoo_ticker
import logging
from yahoo_ticker.ticker_pb2 import Ticker

logging.basicConfig(
    level=logging.DEBUG,  # Set the log level to DEBUG
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',  # Define the log format
    datefmt='%Y-%m-%d %H:%M:%S'  # Define the date format
)

# this function is called on each ticker update
def on_new_msg(ws, msg: Ticker):
    logging.info(f"{'-'*15} {msg.id} {'-'*15}")
    logging.info(f"Symbol: {msg.id}")
    # loop through __slots__ and print value
    for field in msg.DESCRIPTOR.fields:
        field_name = field.name
        field_value = getattr(msg, field_name)
        logging.info(f"{field_name}: {field_value}")
    logging.info("-"*30)


yahoo_ticker.YahooTicker(on_ticker=on_new_msg, ticker_names=[
    "BTC=X", "^GSPC", "^DJI", "^IXIC", "^RUT", "CL=F", "GC=F", "SI=F", "EURUSD=X", "^TNX", "^VIX", "GBPUSD=X", "JPY=X", "BTC-USD", "^CMC200", "^FTSE", "^N225"
])
