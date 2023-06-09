#![allow(incomplete_features)]
#![feature(
    const_trait_impl,
    const_default_impls,
    const_hash,
    iter_array_chunks,
    step_trait,
    // let_chains,
    // slice_index_methods,
    adt_const_params,
    const_mut_refs
)]

pub mod corpus;
pub mod corpus_refiner;
pub mod data;
pub mod keyboard;
pub mod keyboard_types;
pub mod layout;
pub mod stats;
pub mod trigram_types;
pub mod trigrams;
pub mod weights;

pub const REPLACEMENT_CHAR: char = char::REPLACEMENT_CHARACTER;
pub const SHIFT_CHAR: char = '⇑';
pub const REPEAT_KEY: char = '@';

pub mod prelude {
    use super::*;

    pub use corpus::Corpus;
    pub use corpus_refiner::{CorpusRefiner, RefineCorpus};
    pub use keyboard::Keyboard;
    pub use layout::Layout;
    pub use stats::KeyboardStats;
    pub use trigram_types::{default_trigram_types, TrigramType, TrigramTypes};
    pub use trigrams::{KeyboardTrigrams, TrigramClassifications};
    pub use weights::Weights;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn thing() {
        println!("{}", 3usize.next_power_of_two());
    }
}
