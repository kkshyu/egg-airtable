import Airtable from 'airtable'

export default app => {
  app.addSingleton('airtable', createAirtable)
}

/**
 * @param  {Object} config   
 * @param  {Application} app 
 * @return {Object}          
 */
function createAirtable(config, app) {
  // assert config
  assert(config.endpointUrl && config.apiKey)
  // create instance
  const client = Airtable.configure(config);
  // checking before start
  app.beforeStart(async () => {
    // TODO: some check here
    app.coreLogger.info(`[egg-airtable] init instance success`)
  })
  return client
}