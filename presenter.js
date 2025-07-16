class Presenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAdd(this.handleAdd.bind(this));
        this.view.bindToggle(this.handleToggle.bind(this));
        this.view.bindRemove(this.handleRemove.bind(this));

        this.view.render(this.model.getAll());
    }

    handleAdd(task) {
        this.model.add(task);
        this.view.render(this.model.getAll());
    }

    handleToggle(index) {
        this.model.toggle(index);
        this.view.render(this.model.getAll());
    }

    handleRemove(index) {
        this.model.remove(index);
        this.view.render(this.model.getAll());
    }
}

//Inicialização
const app = new Presenter(new Model(), new View());