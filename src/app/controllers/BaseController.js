class BaseController {
    handleResponse = (res, resp) => res.json(resp);

    handleError = (res, error) => res.status(400).json({ error: error.message });
};

export default BaseController;